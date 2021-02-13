import React from "react";
import NewPosts from "./NewPosts";
import CategoryList from "./CategoryList";

const RightColumn = ({ posts }) => {
  return (
    <div className="rightColumn">
      <NewPosts posts={posts} />
      <CategoryList />
    </div>
  );
};

export default RightColumn;
