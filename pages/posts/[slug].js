import PostContent from '../../components/posts/post-detail/post-content';
import path from 'path';
import { getPostData, getAllPosts } from '../../lib/posts-util';

export default function PostDetailPage(props) {
  const imagePath = `/images/posts/${props.slug}/${props.image}`;
  return (
    <>
      <PostContent
        title={props.title}
        image={imagePath}
        content={props.content}
        slug={props.slug}
      />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const fileName = `${params.slug}.md`;
  const postData = getPostData(fileName);
  return {
    props: {
      ...postData,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => {
      return { params: { slug: post.slug } };
    }),
    fallback: false,
  };
}
