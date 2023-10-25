import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import React, { useState, useEffect } from "react";

import getContentful from "./api/utils";

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const [data, setData] = useState();

  useEffect(() => {
    getContentful().then((tmp) => {
      setData(tmp);
    });
  }, []);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {data && (
            <div>
              <h1>{data.title}</h1>
              <h1>{data.date}</h1>
              {data.content.content.map((val, idx) => {
                return <p key={idx}>{val.content[0].value}</p>;
              })}
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
