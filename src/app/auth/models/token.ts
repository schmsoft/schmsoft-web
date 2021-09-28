export interface Token {
  type: 'Bearer' | 'JWT';
  token: string;
  refresh_token: string;
}
