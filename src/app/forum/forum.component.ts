import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { ForumTopic } from '../models/forum-topic.model';
import { ForumService } from '../services/forum.service';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tag } from '../models/tag.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  topicsObservable: Observable<ForumTopic[]>;
  topics: ForumTopic[];
  filteredTopics: ForumTopic[];
  newTopic: ForumTopic = new ForumTopic();

  searchText = '';

  modalRef: BsModalRef;

  constructor(
    private forumService: ForumService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getTopics();
  }

  private getTopics(): void {
    this.topicsObservable = this.forumService.getTopics();
    this.topicsObservable.subscribe(res => {
      this.topics = res;
      this.filterTopics();
    });
  }

  public addTopicModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  public addTopic(): void {
    this.forumService.addTopic(this.newTopic)
      .subscribe(() => {
        this.newTopic = new ForumTopic();
        this.getTopics();
        this.searchText = '';
        this.modalRef.hide();
      });
  }

  public filterTopics(): void {
    if (!this.searchText) {
      this.filteredTopics = this.topics;
    } else {
      this.filteredTopics = this.topics.filter((topic: ForumTopic) => {
        if (topic.name.includes(this.searchText)) {
          return true;
        } else if (topic.description && topic.description.includes(this.searchText)) {
          return true;
        } else if (topic.tags && topic.tags.length) {
          const filteredTags = topic.tags.filter((tag: Tag) => {
            return tag.display.includes(this.searchText);
          });
          return !!filteredTags.length;
        }
        return false;
      });
    }
  }
}
