import React from "react";
import Categories from "../lib/categories";
import Category from "./Category";

const CategoryList = () => {
  return (
    <div className="categories">
      {Categories.map((category) => (
        <Category
          key={category.name}
          icon={category.icon}
          title={category.name}
          url={category.url}
          color={category.color}
        />
      ))}
    </div>
  );
};

export default CategoryList;
