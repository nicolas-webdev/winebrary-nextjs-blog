import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryPosts = ({ category, categoryPosts }) => {
  console.log(categoryPosts);
  return (
    <div className="categoryPosts">
      {categoryPosts.map((post) => (
        <Link href={`/${post.slug}`}>
          <a className="categoryPost">
            <Image src={post.feature_image} width={365} height={190} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPosts;
