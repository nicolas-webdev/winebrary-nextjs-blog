import React from "react";

const Search = () => {
  return (
    <div className="header__search">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
          stroke="#D76655"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.9999 19L14.6499 14.65"
          stroke="#D76655"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input type="text" name="search" id="search" />
    </div>
  );
};

export default Search;
