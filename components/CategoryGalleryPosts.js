import React from "react";
import Link from "next/link";
import CategoryGalleryPostsCard from "./CategoryGalleryPostsCard";

const CategoryGalleryPosts = ({ name, posts, icon, url, color }) => {
  let displayPosts;
  if (posts.length > 6) {
    displayPosts = posts.slice(0, 6);
  } else {
    displayPosts = posts;
  }
  return (
    <div className="galleryPost">
      <Link href={`/category/${url}`}>
        <a>
          <div className="category" style={{ backgroundColor: color }}>
            <h3>
              <span>{icon}</span>
              {name}
            </h3>
          </div>
        </a>
      </Link>
      <div className="galleryPosts__cards">
        {displayPosts.map((post) => (
          <CategoryGalleryPostsCard
            key={post.id}
            title={post.title}
            image={post.feature_image}
            excerpt={post.excerpt}
            slug={post.slug}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGalleryPosts;
