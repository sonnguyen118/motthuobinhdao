import Head from "next/head";
import Image from "next/image";
// import "../sass/main.scss";
import Layout from "./Components/Layout";
import Homee from "./Home/index";

export default function Home() {
  return (
    <Layout>
      <Homee />
    </Layout>
  );
}
