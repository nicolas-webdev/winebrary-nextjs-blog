import React from "react";
import Link from "next/link";
// import Image from "next/image";

const Logo = ({ position = "header" }) => {
  return (
    <Link href="/">
      <a>
        <div className={`${position}__logo`}>
          {/* <div className={`${position}__logo__icon`}>
            <Image src="/grape-logo.png" width="80" height="80" alt="logo" />
          </div> */}
          <div className={`${position}__logo__text`}>The Winebrary</div>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
