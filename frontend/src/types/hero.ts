export interface Hero {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  button_text: string;
  button_link: string;
  image: string | null;
  is_active: boolean;
  created_at: string;
}
