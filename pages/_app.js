import React, { useState, useEffect } from "react";
import "../styles/sass/main.scss";

// import "../styles/globals.css";
import Layout from "../pages/Components/Layout";
import { StoreProvider } from "../utils/Store";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
