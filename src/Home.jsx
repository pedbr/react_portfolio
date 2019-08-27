import React from "react";
import Intro from "./Intro";
import Hello from "./Hello";
import Header from "./Header";
import Work from "./Work";
import Projects from "./Projects";
import About from "./About";
import "../src/css/home.css";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className="body-home">
      <div className="header-style">
        <Header />
      </div>
      <div className="">
        <Switch>
          <Route exact path="/" component={Intro}></Route>
          <Route exact path="/hello" component={Hello}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/work" component={Work}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Home;
