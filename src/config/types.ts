export interface UserResponse {
  headers: Header;
}

export interface Header {
  'access-token': string;
  'cache-control': string;
  client: string;
  'content-type': string;
  expiry: string;
  uid: string;
}
