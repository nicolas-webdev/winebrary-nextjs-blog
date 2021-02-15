import { getSinglePost, getPosts } from "../lib/posts";
import RightColumn from "../components/RightColumn";
import Layout from "../components/Layout";
import RecommendedPosts from "../components/RecommendedPosts";
import Image from "next/image";
import { InlineShareButtons } from "sharethis-reactjs";

// PostPage page component
const PostPage = ({ posts, post }) => {
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
                  labels: "cta", // button labels (cta, counts, null)
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
                  show_total: true,
                  size: 40, // the size of each button (INTEGER)
                }}
              />
            </div>
            <div className="blog__post">
              <div className="blog__post__meta">
                {/* breadcrumbs */}
                {/* metadata */}
              </div>
              <div className="blog__post__body">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
              <div className="blog__footer__bio">
                <div className="blog__footer__authorAvatar">{/* avatar */}</div>
                <div className="blog__footer__authorBio">
                  {/* author bio */}
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

//* <h1>{props.post.title}</h1>
// <div dangerouslySetInnerHTML={{ __html: props.post.html }} /> */
//Props for the Page

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

  return {
    props: { post, posts },
  };
}
