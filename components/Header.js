import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="header">
      <div className="header__topBanner__wrapper">
        <div className="header__topBanner">
          <div className="header__topBanner__leftText">
            <p>ワインがもっと好きになるワイン情報ブログ</p>
          </div>
          <div className="header__topBanner__rightText">
            <Link href="/category/wine-beginners-guide">
              <a>▲初めての方はこちらへ</a>
            </Link>
          </div>
        </div>
      </div>
      <nav className="header__nav__wrapper">
        <div className="header__nav">
          <Logo position="header" />
          <NavLinks />
          <Search />
        </div>
      </nav>
    </header>
  );
};

export default Header;
