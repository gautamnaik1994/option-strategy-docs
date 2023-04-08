import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroCarousel from "../components/HeroCarousel";
import StrategyCalender from "../components/StrategyCalendar";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero-banner">
      <div className="container">
        <HeroCarousel />
        <div className="content-sec">
          <h1 className="">{siteConfig.title}</h1>
          <p className="">{siteConfig.tagline}</p>
          <div className="buttons">
            <Link className="button button--lg" to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <div className="container">
        <StrategyCalender />
      </div>
    </Layout>
  );
}
