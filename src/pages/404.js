import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Metadata from "../components/metadata";

import * as errStyle from "./404.module.scss";
// Style from: https://codepen.io/gabriellewee/pen/oBPGWd

const NotFound = () => {
  return (
    <Layout>
      <Metadata title="404" description="The page not found page." />
      <div className={errStyle.container}>
        <main>
          <div>
            <div>
              <span>404&nbsp;error</span>
              <span>page&nbsp;not&nbsp;found</span>
            </div>
            <svg viewBox="0 0 200 600">
              <polygon points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 200 591.044514 200 8"></polygon>
            </svg>
          </div>
          <svg className={errStyle.crack} viewBox="0 0 200 600">
            <polyline points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514"></polyline>
          </svg>
          <div>
            <svg viewBox="0 0 200 600">
              <polygon points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 0 591.044514 0 8"></polygon>
            </svg>
            <div>
              <span>this&nbsp;can&nbsp;happen!</span>
              <span>
                <p>
                  <Link className={errStyle.link} to="/blog/">
                    Check the latest articles instead.
                  </Link>
                </p>
              </span>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default NotFound;
