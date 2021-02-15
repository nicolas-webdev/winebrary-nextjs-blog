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
  const indexContent = `
  レストランやバルで、ドリンクメニューとして見かける機会も増えたワイン。
  そんなワインですが、一体どんなお酒かご存知ですか？ワインの定義など分かりやすく解説いたします！レストランやバルで、ドリンクメニューとして見かける機会も増えたワイン。
  そんなワインですが、一体どんなお酒かご存知ですか？ワインの定義など分かりやすく解説いたします！そんなワインですが、一体どんなお酒かご存知ですか？ワインの定義など分かりやすく解説いたします！  `;
  return (
    <div className="leftColumn">
      <TextBox
        title={index ? "About" : category.name}
        content={index ? indexContent : category.description}
      />
      {!index && (
        <CategoryPosts category={category} categoryPosts={categoryPosts} />
      )}
      <RecommendedPosts posts={posts} />
      {index && <CategoryGallery tags={tags} />}
    </div>
  );
};

export default LeftColumn;
