import { GetStaticProps } from "next/types";
import { IPostPageProps } from "../../interfaces/pages/post";

import Head from "next/head";

import { Layout } from "../../components/layout";
import { DisplayDate } from "../../components/displayDate";

import { getPostData, getPostsIds } from "../../lib/posts";

import utilStyles from '../../styles/utils.module.css';


export default function Post({ data }: IPostPageProps) {
    const { title, date, content } = data;
    
    return(
        <Layout>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{title}</h1>
                <div className={utilStyles.lightText}>
                    <DisplayDate date={date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getPostsIds();
    return {
      paths,
      fallback: false,
    };
  }


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params.id as string;
    const data = await getPostData(id);

    return {
        props:{
            data
        }
    }
}
