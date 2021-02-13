import React from "react";
import CategoryGalleryPosts from "./CategoryGalleryPosts";

const CategoryGallery = ({ tags }) => {
  return (
    <div className="categoryGallery">
      {tags.map((tag) => (
        <CategoryGalleryPosts
          name={tag.name}
          color={tag.color}
          posts={tag.posts}
          url={tag.url}
          icon={tag.icon}
          key={tag.name}
        />
      ))}
    </div>
  );
};

export default CategoryGallery;
