import '../styles/globals.scss';
import Head from 'next/head';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NeXtBlog</title>
        <meta name='description' content='A NextJS Demo Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
