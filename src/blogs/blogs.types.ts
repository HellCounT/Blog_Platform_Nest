import { Types } from 'mongoose';

export type CreateBlogInputModelType = {
  name: string;
  description: string;
  websiteUrl: string;
};

export type CreatePostForBlogModelType = {
  title: string;
  shortDescription: string;
  content: string;
};

export type BlogViewModelType = {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  createdAt: string;
  isMembership: boolean;
};

export class BlogDb {
  constructor(
    public _id: Types.ObjectId,
    public name: string,
    public description: string,
    public websiteUrl: string,
    public createdAt: string,
    public isMembership: boolean,
  ) {}
}

export type BlogPaginatorType = {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: BlogViewModelType[];
};
