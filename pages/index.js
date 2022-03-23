import Head from "next/head";
import Image from "next/image";
// import "../sass/main.scss";
import Layout from "./Components/Layout";
import Homee from "./Home/index";
import Loading from "./Home/Loading";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  // const [loading, setloading] = useState(false);
  // useEffect(() => {
  //   setloading(true);
  //   setTimeout(() => {
  //     setloading(false);
  //   }, 3000);
  // }, []);
  const DynamicComponentWithCustomLoading = dynamic(
    () => import("./Home/index"),
    { loading: () => <Loading /> }
  );

  return (
    // <>
    //   {loading ? (
    //     <Loading />
    //   ) : (

    <DynamicComponentWithCustomLoading />

    //   )}
    // </>
  );
}
