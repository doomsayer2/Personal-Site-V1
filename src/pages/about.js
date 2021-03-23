import React from "react";
import Layout from '../components/layout';
import Metadata from "../components/metadata";

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="A short description about me." />
      <h1>About Page</h1>
      <p>Florian is a web developer, teacher and researcher.</p>
    </Layout>
  );
};

export default About;
