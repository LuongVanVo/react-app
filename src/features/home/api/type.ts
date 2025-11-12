export interface User {
  id: number;
  email: string;
  name: string;
  avatar_url: string | null;
  is_active: boolean;
  is_deleted: boolean;
  is_email_verified: boolean;
  roles: string[];
  createdAt: string;
  updatedAt: string;
}
