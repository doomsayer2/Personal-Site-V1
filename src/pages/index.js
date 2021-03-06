import React from "react";
import Layout from '../components/layout';
import Metadata from "../components/metadata";

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page." />
      <h1>Home page</h1>
      <h2>I am Florian a programmer and researcher.</h2>
    </Layout>
  );
};

export default Index;
