export class user {
  id!: number;
  display_name!: string;
  email!: string;
  password!: string;
  profile_image_url!: string;
  date_creation!: Date;
  date_update!: Date;
  comment!: Comment[];
  post!: any;
}
