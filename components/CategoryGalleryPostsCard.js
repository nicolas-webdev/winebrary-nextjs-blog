import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryGalleryPostsCard = ({ title, image, excerpt, slug, color }) => {
  return (
    <div
      className="galleryPosts__cards__card"
      style={{ backgroundColor: color }}
    >
      <Link href={`/${slug}`}>
        <a>
          <Image
            className="galleryPosts__cards__image"
            src={image}
            alt={title}
            width={476}
            height={248}
          />
          <div className="galleryPosts__cards__description">
            <h3>{title}</h3>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CategoryGalleryPostsCard;
