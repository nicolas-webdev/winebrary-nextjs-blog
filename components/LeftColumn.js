import React from "react";
import TextBox from "./TextBox";
import RecommendedPosts from "./RecommendedPosts";
import CategoryGallery from "./CategoryGallery";
import CategoryPosts from "./CategoryPosts";

const LeftColumn = ({
  tags,
  index = false,
  category = undefined,
  posts,
  categoryPosts = undefined,
}) => {
  return (
    <div className="leftColumn">
      <TextBox
        title={index ? "About" : category.name}
        content={index ? posts[0].authors[0].bio : category.description}
      />
      {!index && <CategoryPosts categoryPosts={categoryPosts} />}
      <RecommendedPosts posts={posts} />
      {index && <CategoryGallery tags={tags} />}
    </div>
  );
};

export default LeftColumn;
