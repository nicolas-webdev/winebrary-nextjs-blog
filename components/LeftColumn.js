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
      {!index && (
        <>
          <TextBox
            title={index ? "About" : category.name}
            content={index ? posts[0].authors[0].bio : category.description}
          />
          <CategoryPosts categoryPosts={categoryPosts} />
        </>
      )}
      <RecommendedPosts posts={posts} />
      {index && (
        <>
          <CategoryGallery tags={tags} />
          <TextBox
            title={index ? "About" : category.name}
            content={index ? posts[0].authors[0].bio : category.description}
          />
        </>
      )}
    </div>
  );
};

export default LeftColumn;
