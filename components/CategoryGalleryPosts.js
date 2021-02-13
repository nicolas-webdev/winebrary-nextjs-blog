import React from "react";
import Link from "next/link";
import CategoryGalleryPostsCard from "./CategoryGalleryPostsCard";

const CategoryGalleryPosts = ({ name, posts, icon, url, color }) => {
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
        {posts.map((post) => (
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
