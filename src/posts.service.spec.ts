import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const newPost = postsService.create(post);

    expect(newPost).toBeDefined();
    expect(newPost.id).toBe('2');
    expect(newPost.text).toBe('Mocked post')
    expect(postsService['posts'].length).toBe(2);
  });

  it('should find a post', () => {
    const foundPost = postsService.find('1');
    expect(foundPost).toBeDefined();
    expect(foundPost?.text).toBe('Some pre-existing post')
  });
});