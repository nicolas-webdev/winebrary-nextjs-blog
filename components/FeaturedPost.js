import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedPost = ({ post }) => {
  return (
    <div className="featuredPost">
      <Link href={`/${post.slug}`}>
        <a>
          <Image
            className="featuredPost__cover"
            src={post.feature_image}
            alt={post.title}
            height={525}
            width={1000}
          />
        </a>
      </Link>
    </div>
  );
};

export default FeaturedPost;
