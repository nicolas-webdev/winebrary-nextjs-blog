import { getPosts } from "../lib/posts";

import React from "react";

const post = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.slug}</li>
          <li>{post.title}</li>
          <li>{post.excerpt}</li>
          <img src={post.feature_image} alt="" />
        </ul>
      ))}
    </div>
  );
};

export default post;

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}
