import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateBlogInputModelType,
  CreatePostForBlogModelType,
} from './blogs.types';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(
    protected readonly blogsService: BlogsService,
    protected readonly postsService: PostsService,
    protected readonly blogsQueryRepo: BlogsQueryRepo,
    protected readonly postsQueryRepo: PostsQueryRepo,
  ) {}
  @Post()
  async createBlog(@Body() input: CreateBlogInputModelType) {
    return await this.blogsService.createBlog(
      input.name,
      input.description,
      input.websiteUrl,
    );
  }
  @Post(':blogId/posts')
  async createPostForBlogId(
    @Body() input: CreatePostForBlogModelType,
    @Param('blogId') blogId: string,
  ) {
    return await this.postsService.createPost(
      input.title,
      input.shortDescription,
      input.content,
      blogId,
    );
  }
  @Put(':id')
  async updateBlog(
    @Body() input: CreateBlogInputModelType,
    @Param('id') id: string,
  ) {
    return await this.blogsService.updateBlog(
      id,
      input.name,
      input.description,
      input.websiteUrl,
    );
  }
  @Delete(':id')
  async deleteBlog(@Param('id') id: string) {
    return await this.blogsService.deleteBlog(id);
  }
  @Get()
  async getAllBlogs() {
    return await this.blogsQueryRepo.viewAllBlogs(queryParams);
  }
  @Get(':id')
  async getBlogById(@Param('id') id: string) {
    return await this.blogsQueryRepo.findBlogById(id);
  }
  @Get(':id/posts')
  async getPostsForBlogId(@Param('id') id: string) {
    return this.postsQueryRepo.findPostsByBlogId(id, queryParams);
  }
}