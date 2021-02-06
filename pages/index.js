import Head from "next/head";
import { getPosts } from "../lib/posts";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className="index">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {posts.map((post) => (
        <Link href={`/${post.slug}`}>
          <a>
            <ul key={post.id}>
              <li>{post.slug}</li>
              <li>{post.dateFormatted}</li>
              <li>{post.title}</li>
              <li>{post.excerpt}</li>
              <img src={post.feature_image} alt="" />
            </ul>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  posts.map((post) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    post.dateFormatted = new Intl.DateTimeFormat("ja-JP", options).format(
      new Date(post.published_at)
    );
  });

  return {
    props: { posts },
  };
}
