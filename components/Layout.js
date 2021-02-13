import React from "react";
import Head from "next/head";
import Header from "./Header";
import { metadata } from "../lib/meta";

const Layout = ({ children, ...pageProps }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <body>{children}</body>
      {/* footer */}
    </>
  );
};

export default Layout;
