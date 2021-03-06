import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import classes from '../styles/utils.module.css';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${classes.headingMd} ${classes.padding1px}`}>
        <h2 className={classes.headingLg}>Blog</h2>
        <ul className={classes.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={classes.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
