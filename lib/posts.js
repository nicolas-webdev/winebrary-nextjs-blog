import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://winebrary-backend.herokuapp.com",
  key: "17af1944869ab2b3ed3667daa7",
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getTag(tagSlug) {
  return await api.tags
    .read({
      slug: tagSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostsByTag(tag) {
  return await api.posts
    .browse({
      limit: 3,
      filter: `tag:${tag}`,
    })
    .catch((err) => {
      console.error(err);
    });
}
