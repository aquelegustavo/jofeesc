import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Cover from "../components/Cover";
import "../styles/globals.scss";
import Numbers from "../components/Numbers";
import Where from "../components/Where";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header/>
      <Cover />
      <Numbers/>
      <Schedule/>
      <Where/>
      <Footer/>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>JOFEESC</title>;
