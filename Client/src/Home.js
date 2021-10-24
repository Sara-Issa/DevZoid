import React from "react";
import Nav2 from "./components/Home/nav2";
import Freelancers from "./components/Home/freelancers";
import Job from "./components/Home/jobs"
import Offer from "./components/Home/offer";
import Promoting from "./components/Home/promoting";

function Home() {
  return (
    <div>
      <Nav2 />
      <Freelancers />
      <Job />
      <Offer />
      <Promoting />
    </div>
  );
}

export default Home;
