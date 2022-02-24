export class Post {
  id!: number;
  title!: string;
  content!: string;
  imageUrl!: string;
  author_id!: number;
  date_creation!: Date;
  date_update!: Date;
  comment!: Comment[];
  user!: any;
}
