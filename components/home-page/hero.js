import styles from './hero.module.scss';
import Image from 'next/image';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/sample_image.jpeg'
          alt='Image of the author'
          height={300}
          width={300}
        />
      </div>
      <h1>Shaun's Blog</h1>
      <p>
        Welcome to my blog. I blog about science, technology, and philosophy.
      </p>
    </section>
  );
}

export default Hero;
