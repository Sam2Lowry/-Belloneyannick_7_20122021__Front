export interface Post {
  id: number;
  title: string;
  content: string;
  image_url: any;
  profilePic: string;
  author_id: number;
  date_creation: string;
  date_update: string;
  _count: Count;
}

export interface Count extends Post {
  comment: number;
}
