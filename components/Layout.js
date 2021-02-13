import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { metadata } from "../lib/meta";

const Layout = ({ children, ...pageProps }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
