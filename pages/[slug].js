import { getSinglePost, getPosts } from "../lib/posts";
import RightColumn from "../components/RightColumn";
import Layout from "../components/Layout";
import RecommendedPosts from "../components/RecommendedPosts";
import Image from "next/image";
import Link from "next/link";
import { InlineShareButtons } from "sharethis-reactjs";

// PostPage page component
const PostPage = ({ posts, post, titles }) => {
  // Render post title and content in the page from props

  return (
    <Layout>
      <div className="blog">
        <main>
          <div className="blog__left">
            <Image src={post.feature_image} width={746} height={396} />
            <div className="blog__title">
              <h1>{post.title}</h1>
            </div>
            <div className="blog__share__sns">
              <InlineShareButtons
                config={{
                  alignment: "center", // alignment of buttons (left, center, right)
                  color: "social", // set the color of buttons (social, white)
                  enabled: true, // show/hide buttons (true, false)
                  font_size: 16, // font size for the buttons
                  labels: "counts", // button labels (cta, counts, null)
                  language: "en", // which language to use (see LANGUAGES)
                  networks: [
                    // which networks to include (see SHARING NETWORKS)
                    "whatsapp",
                    "linkedin",
                    "messenger",
                    "facebook",
                    "twitter",
                  ],
                  padding: 0, // padding within buttons (INTEGER)
                  radius: 4, // the corner radius on each button (INTEGER)
                  show_total: false,
                  size: 40, // the size of each button (INTEGER)
                }}
              />
            </div>
            <div className="blog__post">
              <div className="blog__post__meta">
                <div className="post__meta__date">
                  <p id="date">🗓 {post.dateFormatted}</p>
                </div>
                <ol id="breadcrumbs">
                  <li id="breadcrumb-home">
                    <Link href="/">
                      <a>ホーム »</a>
                    </Link>
                  </li>
                  <li id="breadcrumb-category">
                    <Link href={`/category/${post.tags[0].slug}`}>
                      <a>{post.tags[0].name} »</a>
                    </Link>
                  </li>
                  <li id="breadcrumb-post">
                    <Link href={`/category/${post.tags[0].slug}`}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                </ol>
              </div>
              <div className="blog__post__body">
                <div className="blog__post__toc">
                  <ol id="toc">
                    {titles.map((title, index) => (
                      <li key={index}>{title}</li>
                    ))}
                  </ol>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
              <div className="blog__footer__bio">
                <div className="blog__footer__authorAvatar">
                  <Image
                    src={post.authors[0].profile_image}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="blog__footer__authorBio">
                  <h4>{post.authors[0].name}</h4>
                  <p>{post.authors[0].bio}</p>
                </div>
              </div>
            </div>
            <RecommendedPosts posts={posts} />
          </div>
          <div className="blog__right">
            <RightColumn posts={posts} />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const posts = await getPosts();

  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const postContent = post.html;
  const headings = [
    ...postContent.matchAll(/<h[2-3].*>(?<heading>.*?)<\/h[2-3]>/g),
  ];
  const titles = headings.map((heading) => heading.groups.heading);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  post.dateFormatted = new Intl.DateTimeFormat("ja-JP", options).format(
    new Date(post.published_at)
  );

  return {
    props: { post, posts, titles },
  };
}
