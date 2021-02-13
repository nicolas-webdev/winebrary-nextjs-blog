import React from "react";
import NewPost from "./NewPost";

const NewPosts = ({ posts }) => {
  return (
    <div className="newPosts">
      <div className="newPosts__wrapper">
        <div className="newPosts__title">
          <p>NEW</p>
        </div>
        <NewPost post={posts[0]} />
        <NewPost post={posts[1]} />
        <NewPost post={posts[2]} />
        <NewPost post={posts[3]} />
      </div>
    </div>
  );
};

export default NewPosts;
