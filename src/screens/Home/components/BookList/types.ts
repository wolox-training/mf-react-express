export interface Book {
  author: string;
  id: number;
  imageUrl: string;
  title: string;
}

export interface BooksResponse {
  count: number;
  currentPage: number;
  nextPage: null;
  page: Book[];
  totalPages: number;
  totalCount: number;
}
