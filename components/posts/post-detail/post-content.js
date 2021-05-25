import styles from './post-content.module.scss';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
  title: 'sample post',
  image: 'sample_image.png',
  date: new Date().toISOString(),
  slug: 'sample1',
  content: '# This is a sample post',
};

function PostContent() {
  return (
    <article className={styles.content}>
      <PostHeader
        title={DUMMY_POST.title}
        image={`/images/posts/sample/sample_image.png`}
      />

      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
