import styles from './featured-posts.module.scss';
import PostGrid from '../posts/post-grid';

function FeaturedPosts(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
