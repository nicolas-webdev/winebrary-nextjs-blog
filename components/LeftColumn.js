import React from "react";
import TextBox from "./TextBox";
import RecommendedPosts from "./RecommendedPosts";
import CategoryGallery from "./CategoryGallery";

const LeftColumn = ({ tags, index = false, category = undefined, posts }) => {
  const dummycontent = `
  レストランやバルで、ドリンクメニューとして見かける機会も増えたワイン。
  そんなワインですが、一体どんなお酒かご存知ですか？ワインの定義など分かりやすく解説いたします！レストランやバルで、ドリンクメニューとして見かける機会も増えたワイン。
  そんなワインですが、一体どんなお酒かご存知ですか？ワインの定義など分かりやすく解説いたします！そんなワインですが、一体どんなお酒かご存知ですか？ワインの定義など分かりやすく解説いたします！  `;
  return (
    <div className="leftColumn">
      <TextBox title="About" content={dummycontent} />
      <RecommendedPosts posts={posts} />
      <CategoryGallery tags={tags} />
    </div>
  );
};

export default LeftColumn;
