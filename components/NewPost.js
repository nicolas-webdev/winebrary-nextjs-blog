import React from "react";
import Link from "next/link";
import Image from "next/image";

const NewPost = ({ post }) => {
  return (
    <div className="newPost">
      <Link href={`/${post.slug}`}>
        <a>
          <Image
            src={post.feature_image}
            width={172}
            height={90}
            alt={post.title}
            className="newPost__image"
          />
        </a>
      </Link>
    </div>
  );
};

export default NewPost;
