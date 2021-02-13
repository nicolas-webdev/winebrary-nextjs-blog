import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryGalleryPosts = ({ name, posts, icon, url, color }) => {
  return (
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
  );
};

export default CategoryGalleryPosts;
