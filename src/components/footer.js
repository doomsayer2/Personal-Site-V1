import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as footerStyles from "./footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  );

  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <p>
          Site developed by {data.site.siteMetadata.author} (
          {data.site.siteMetadata.title}) &copy; on --{" "}
          {new Date().toLocaleDateString()}{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
