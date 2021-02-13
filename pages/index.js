import { getPosts, getPostsByTag } from "../lib/posts";
import Layout from "../components/Layout";
import FeaturedPost from "../components/FeaturedPost";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import categories from "../lib/categories";

export default function Home({ posts, tags }) {
  return (
    <Layout>
      <div className="index">
        <FeaturedPost post={posts[3]} />
        <main>
          <LeftColumn posts={posts} index={true} tags={tags} />
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

  const tags = [];
  for (let i = 0; i < categories.length; i++) {
    let posts = await getPostsByTag(categories[i].url);
    let name = categories[i].name;
    let url = categories[i].url;
    let color = categories[i].color;
    let icon = categories[i].icon;
    tags.push({
      name: name,
      posts: posts,
      url: url,
      color: color,
      icon: icon,
    });
  }

  return {
    props: { posts, tags },
  };
}
