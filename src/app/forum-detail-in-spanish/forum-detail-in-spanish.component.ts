import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../services/forum.service';
import { Forum } from '../models/forum.model';
import { ForumPost } from '../models/forum-post.model';
import { Tag } from '../models/tag.model';

@Component({
  selector: 'app-forum-detail-in-spanish',
  templateUrl: './forum-detail-in-spanish.component.html',
  styleUrls: ['./forum-detail-in-spanish.component.css']
})
export class ForumDetailInSpanishComponent implements OnInit {

  // Component Text For Translation
  addTopicText = 'Add Topic';

  forum: Forum;
  newPost = new ForumPost();
  newReply = '';
  displayNewPost = false;
  replying: string;
  searchText: string;
  filteredPosts: ForumPost[];

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
        this.filterPosts();
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

  public filterPosts(): void {
    if (!this.searchText) {
      this.filteredPosts = this.forum.posts;
    } else {
      this.filteredPosts = this.forum.posts.filter((post: ForumPost) => {
        if (post.title && post.title.includes(this.searchText)) {
          return true;
        } else if (post.text && post.text.includes(this.searchText)) {
          return true;
        } else if (post.tags && post.tags.length) {
          const filteredTags = post.tags.filter((tag: Tag) => {
            return tag.display.includes(this.searchText);
          });
          return !!filteredTags.length;
        }
        return false;
      });
    }
  }

}

