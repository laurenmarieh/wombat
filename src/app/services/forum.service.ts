import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ForumTopic } from '../models/forum-topic.model';
import { Forum } from '../models/forum.model';
import { ForumPost } from '../models/forum-post.model';

@Injectable()
export class ForumService {

  private tempTopics: ForumTopic[] = [];
  private tempForums: Forum[] = [];

  constructor(private httpClient: HttpClient) { }

  public getTopics(): Observable<ForumTopic[]> {

    return of(this.tempTopics);
  }

  public addTopic(topic: ForumTopic): Observable<ForumTopic> {
    topic.id = this.newGuid();
    this.tempTopics.push(topic);
    return of(topic);
  }

  public getForumById(id: string): Observable<Forum> {
    let forum = this.tempForums.find((f: Forum) => {
      return f.id === id;
    });
    if (!forum) {
      forum = new Forum();
      forum.id = id;
      this.tempForums.push(forum);
    }
    return of(forum);
  }

  public addPost(id: string, post: ForumPost): Observable<ForumPost> {
    post.createdDate = new Date();
    post.id = this.newGuid();
    const forum = this.tempForums.find(t => t.id === id);
    forum.posts.push(post);
    return of(post);
  }

  public addReply(forumId: string, postId: string, reply: string): Observable<any> {
    const forum = this.tempForums.find(t => t.id === forumId);
    if (forum && forum.posts) {
      const post = forum.posts.find(p => p.id === postId);
      if (post) {
        post.replies.push(reply);
      }
    }
    return of(null);
  }

  private newGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        // tslint:disable-next-line:no-bitwise
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : ( r & 0x3 | 0x8 );
        return v.toString(16);
    });
}
}
