import React from "react";
import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, ...pageProps }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <body>{children}</body>
      {/* rightside bar */}
      {/* footer */}
    </div>
  );
};

export default Layout;
