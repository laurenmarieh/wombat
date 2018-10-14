import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDetailInSpanishComponent } from './forum-detail-in-spanish.component';

describe('ForumDetailInSpanishComponent', () => {
  let component: ForumDetailInSpanishComponent;
  let fixture: ComponentFixture<ForumDetailInSpanishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumDetailInSpanishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumDetailInSpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
