import { getPosts, getPostsByTag } from "../../lib/posts";
import categories from "../../lib/categories";
import React from "react";
import Layout from "../../components/Layout";
import LeftColumn from "../../components/LeftColumn";
import RightColumn from "../../components/RightColumn";
// import Image from "next/image";
// import Link from "next/link";

const Category = ({ category, posts, categoryPosts }) => {
  return (
    <Layout title={category.name}>
      <div className="Category">
        <main>
          <div className="category__left">
            <LeftColumn
              posts={posts}
              category={category}
              categoryPosts={categoryPosts}
            />
          </div>
          <div className="category__right">
            <RightColumn posts={posts} />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Category;

export async function getStaticPaths() {
  // Get the paths we want to create based on posts
  const paths = categories.map((tag) => ({
    params: { slug: tag.url },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const posts = await getPosts();
  const categoryPosts = await getPostsByTag(context.params.slug);
  const category = categoryPosts[0].tags[0];

  return {
    props: { posts, categoryPosts, category },
  };
}
