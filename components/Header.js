import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="header__topBanner__wrapper">
        <div className="header__topBanner">
          <div className="header__topBanner__leftText">
            <p>ワインがもっと好きになるワイン情報ブログ</p>
          </div>
          <div className="header__topBanner__rightText">
            <a href="/category">▲初めての方はこちらへ</a>
          </div>
        </div>
      </div>
      <nav className="header__nav__wrapper">
        <div className="header__nav">
          <Link href="/">
            <a>
              <div className="header__logo">
                <div className="header__logo__icon">
                  <img src="/logo.svg" alt="logo" />
                </div>
                <div className="header__logo__text">The Winebrary</div>
              </div>
            </a>
          </Link>
          <div className="header__links">
            <a href="/category1">ワイン基礎知識</a>
            <a href="/category2">ワイン学習</a>
            <a href="/category3">ブドウ栽培</a>
          </div>
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
                stroke-opacity="0.7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.9999 19L14.6499 14.65"
                stroke="#D76655"
                stroke-opacity="0.7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input type="text" name="search" id="search" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
