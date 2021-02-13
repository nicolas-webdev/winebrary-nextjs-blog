import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo__container">
          <Logo position="footer" />
        </div>
        <div className="footer__links__container">
          <nav className="footer__nav">
            <NavLinks />
          </nav>
          <div className="footer__copyright">
            <h4>
              The Winebrary｜ワインがもっと好きになるワイン情報ブログ All Rights
              Reserved.
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
