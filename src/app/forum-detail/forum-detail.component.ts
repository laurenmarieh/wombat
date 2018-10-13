import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../services/forum.service';
import { Forum } from '../models/forum.model';
import { ForumPost } from '../models/forum-post.model';

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.css']
})
export class ForumDetailComponent implements OnInit {

  // Component Text For Translation
  addTopicText = 'Add Topic';

  forum: Forum;
  newPost = new ForumPost();
  newReply = '';
  displayNewPost = false;
  replying: string;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService) { }

  ngOnInit() {
    this.getForum();
  }

  private getForum(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.forumService.getForumById(id)
      .subscribe((f: Forum) => {
        this.forum = f;
      });
  }

  public addPost() {
    this.forumService.addPost(this.forum.id, this.newPost)
      .subscribe(() => {
        this.getForum();
        this.newPost = new ForumPost();
      });
  }

  public cancelReply(): void {
    this.replying = undefined;
    this.newReply = '';
  }

  public saveReply(postId: string): void {
    this.forumService.addReply(this.forum.id, postId, this.newReply)
      .subscribe(() => {
        this.getForum();
        this.newReply = '';
      });
  }

}
