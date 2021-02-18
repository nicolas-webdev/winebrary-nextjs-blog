import React from "react";

import Image from "next/image";

const CoverImage = ({ featureImage }) => {
  return (
    <div className="coverImage">
      <Image
        className="coverImage__cover"
        src={featureImage}
        alt="The Winebrary"
        height={432}
        width={2000}
        layout="responsive"
      />
    </div>
  );
};

export default CoverImage;
