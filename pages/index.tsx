import Head from "next/head";
import Link from "next/link";

import { siteTitle, Layout } from "../components/layout";
import { DisplayDate } from "../components/displayDate";

import { GetStaticProps } from "next";
import { IHomePageProps } from "../interfaces/pages/home";

import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

export default function Home(props: IHomePageProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <DisplayDate date={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
};
