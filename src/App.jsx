import React from 'react';
import Header from "./components/header";
import Layout from "./components/layout";
import Link from "./components/link";
import Section from "./components/section";

import Img_google from "./images/google.png";
import Img_drw from "./images/drw.png";
import Img_roadlaunch from "./images/roadlaunch.jpg";
import Img_rbc from "./images/rbc.jpg";
import Img_td from "./images/td.png";
import './App.css';

function App() {
    return (
        <div className="App">
            <Layout>
                <Header />
                <Section id="about" title="About Me">
                    <p>
                        I'm a software engineer from Ontario, Canada. I specialize in
                        software development, full stack web development, system design,
                        and process automation.
                    </p>
                    <p>
                        I'm passionate about developing build highly scalable and maintainable
                        infrastructure, helping teams build great products and most importantly,
                        making significant impacts to the community through technology
                    </p>
                    <p>
                        In my free time, I like to spend time with friends playing board games, bouldering, or finding new tea shops.
                        I also like to read, travel, and exploring new cities, cuisines, and cultures.
                        Check out my <a href="https://www.google.com/maps/contrib/116370847898776376364">Google Maps profile</a> where I have over 10K contributions and 250M impressions!
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
                        title="RoadLaunch"
                        img={<img src={Img_roadlaunch} alt="roadlaunch_icon"></img>}
                        desc="Software Developer, May 2018 - November 2018"
                    />
                    <Link
                        title="RBC"
                        img={<img src={Img_rbc} alt="rbc_icon"></img>}
                        desc="Application Developer, November 2017 - May 2018"
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
                        desc="Java, Typescript, JavaScript, C++, Go, Python"
                    />
                    <Link
                        title="Web Frameworks"
                        desc="ReactJS, NodeJS, AngularJS, GraphQL/REST/RPC/Websockets, HTML/CSS"
                    />
                    <Link title="Databases" desc="NoSQL (MongoDB, Firebase, CouchDB), SQL (MySQL, PostgreSQL, GoogleSQL)" />
                    <Link
                        title="Other"
                        desc="Google Cloud, AWS, Git, Docker, Nginx"
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
                        title="Poker UI"
                        link="https://micexx.github.io/poker-ui/"
                        desc="Simple web-based poker interface built using React"
                    />
                    <Link
                        title="FI Calculator"
                        link="https://micexx.github.io/fi-calculator/"
                        desc="Financial toolbox featuring several useful financial calculators and visualizations"
                    />
                    <Link
                        title="Sudoku Solver"
                        link="https://micexx.github.io/sudokuSolver/"
                        desc="A simple interface for solving Sudoku puzzles using plain Javascript - My first web project!"
                    />
                </Section>
            </Layout>
        </div>
    );
}

export default App;