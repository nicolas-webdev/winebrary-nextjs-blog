import React from "react";
import Link from "next/link";

const Logo = ({ position = "header" }) => {
  return (
    <Link href="/">
      <a>
        <div className={`${position}__logo`}>
          <div className={`${position}__logo__icon`}>
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className={`${position}__logo__text`}>The Winebrary</div>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
