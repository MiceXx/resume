import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";
import SEO from "../components/seo";

import Img_google from "../images/google.png";
import Img_drw from "../images/drw.png";
import Img_roadlaunch from "../images/roadlaunch.jpg";
import Img_rbc from "../images/rbc.jpg";
import Img_td from "../images/td.png";

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Michael Xu" />
    <Section id="about" title="About Me">
      <p>
        I'm a software engineer from Ontario, Canada. I specialize in
        software development, full stack web development, system design,
        and process automation.
      </p>
      <p>
        I'm passionate about writing highly scalable infrastructure,
        helping teams build great products and most importantly,
        making significant impacts to the community through technology.
      </p>
    </Section>
    <Section id="experience" title="Experience">
      <Link
        title="Google"
        img={<img src={Img_google} alt="google_icon"></img>}
        desc="Software Engineer, March 2020 - Present"
      />
      <Link
        title="DRW"
        img={<img src={Img_drw} alt="drw_icon"></img>}
        desc="Software Developer, November 2018 - March 2020"
      />
      <Link
        title="Roadlaunch"
        img={<img src={Img_roadlaunch} alt="roadlaunch_icon"></img>}
        desc="Software Developer, May 2017 - November 2018"
      />
      <Link
        title="RBC"
        img={<img src={Img_rbc} alt="rbc_icon"></img>}
        desc="Application Developer, November 2017 - November 2018"
      />
      <Link
        title="TD"
        img={<img src={Img_td} alt="td_icon"></img>}
        desc="Solution Designer, May 2017 - November 2017"
      />
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages"
        desc="JavaScript, Typescript, Java, C++, Go, Python"
      />
      <Link
        title="Web Frameworks"
        desc="React, Redux, Express (NodeJS), GraphQL, REST API, Websockets, HTML/CSS"
      />
      <Link title="Databases" desc="MongoDB, CouchDB, MySQL" />
      <Link
        title="Other"
        desc="Git, Docker, Nginx"
      />
    </Section>
    <Section id="education" title="Education">
      <Link
        title="McMaster University"
        desc="Master of Science - Computational Science &amp; Engineering"
      />
      <Link
        title="University of Waterloo"
        desc="Bachelor of Mathematics - Combinatorics &amp; Optimization"
      />
    </Section>
    <Section id="projects" title="Projects">
      <Link
        title="FI Calculator"
        link="https://micexx.github.io/fi-calculator/"
        desc="A financial toolbox featuring several useful financial calculators and visualizations"
      />
      <Link
        title="Event manager"
        link="https://micexx.github.io/register-to-play/"
        desc="A tournament registration page for quick and easy event registration. Written using Angular 4 and Google Firestore as the persistence layer"
      />
      <Link
        title="Sudoku Solver"
        link="https://micexx.github.io/sudokuSolver/"
        desc="A simple interface for solving Sudoku puzzles using plain Javascript - My first Web Project!"
      />
    </Section>
  </Layout>
);

export default IndexPage;
