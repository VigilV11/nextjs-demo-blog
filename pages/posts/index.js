import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    title: 'sample1',
    image: 'sample_image.png',
    date: new Date().toISOString(),
    excerpt: 'This is sample data',
    slug: 'sample1',
  },
  {
    title: 'sample2',
    image: 'sample_image.png',
    date: new Date().toISOString(),
    excerpt: 'This is sample data',
    slug: 'sample2',
  },
  {
    title: 'sample3',
    image: 'sample_image.png',
    date: new Date().toISOString(),
    excerpt: 'This is sample data',
    slug: 'sample3',
  },
  {
    title: 'sample4',
    image: 'sample_image.png',
    date: new Date().toISOString(),
    excerpt: 'This is sample data',
    slug: 'sample4',
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
