import React from "react";
import Link from "next/link";
import Image from "next/image";

const RecommendedPosts = ({ posts }) => {
  return (
    <div className="recommendedPosts">
      <div className="recommendedPosts__left">
        <div className="recommendedPosts__post1">
          <Link href={`/${posts[3].slug}`}>
            <a>
              <Image
                src={posts[3].feature_image}
                width={407}
                height={212}
                alt={posts[3].title}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="recommendedPosts__right">
        <div className="recommendedPosts__right__tab">
          <p>おすすめの記事</p>
        </div>
        <div className="recommendedPosts__post2">
          <Link href={`/${posts[6].slug}`}>
            <a>
              <Image
                src={posts[6].feature_image}
                width={322}
                height={169}
                alt={posts[6].title}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedPosts;
