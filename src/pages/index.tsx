import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Header from "../components/Header/Header";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
  </Layout>
);

export default IndexPage;
