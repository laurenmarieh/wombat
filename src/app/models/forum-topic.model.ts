import { Tag } from './tag.model';

export class ForumTopic {
  id: string;
  name: string;
  description: string;
  tags: Tag[];
}
