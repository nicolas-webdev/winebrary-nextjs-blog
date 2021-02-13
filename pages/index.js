import { getPosts } from "../lib/posts";
import Layout from "../components/Layout";
import FeaturedPost from "../components/FeaturedPost";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="index">
        <FeaturedPost post={posts[0]} />
        <main>
          <LeftColumn posts={posts} />
          <RightColumn posts={posts} />
        </main>
      </div>
    </Layout>
  );
}

// {posts.map((post) => (
//   <Link href={`/${post.slug}`}>
//     <a>
//       <ul key={post.id}>
//         <li>{post.slug}</li>
//         <li>{post.dateFormatted}</li>
//         <li>{post.title}</li>
//         <li>{post.excerpt}</li>
//         <img src={post.feature_image} alt="" />
//       </ul>
//     </a>
//   </Link>
// ))}

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
