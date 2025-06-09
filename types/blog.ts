export interface BlogPost {
  id?: string | number;
  title: string;
  content: string;
  author?: string;
  tags?: string[];
  createdAt?: string;
  excerpt?: string;
  slug?: string;
}
