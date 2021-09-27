export interface Token {
  type: 'Bearer' | 'JWT';
  access_token: string;
  refresh_token: string;
}
