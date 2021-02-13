import React from "react";
import Link from "next/link";

const Category = ({ icon, title, url, color }) => {
  return (
    <Link href={`/category/${url}`}>
      <a>
        <div className="category" style={{ backgroundColor: color }}>
          <h3>
            <span>{icon}</span>
            {title}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default Category;
