import React from "react";
import Link from "next/link";

const FeaturedPost = ({ post }) => {
  return (
    <div className="featuredPost">
      <Link href={`/${post.slug}`}>
        <a>
          <img
            className="featuredPost__cover"
            src={post.feature_image}
            alt={post.title}
          />
        </a>
      </Link>
    </div>
  );
};

export default FeaturedPost;
