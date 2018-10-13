import { Tag } from './tag.model';

export class ForumPost {
  id: string;
  title: string;
  text: string;
  createdDate: Date;
  images: string[];
  tags: Tag[];
  replies: string[] = [];
}
