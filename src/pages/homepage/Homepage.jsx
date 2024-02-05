import React from "react";
import { HomeDiv } from "./style";
import HomeImage from "../../components/home/HomeImage";
import MyThought from "../../components/home/MyThought";

function Homepage() {
  return (
    <HomeDiv>
      <HomeImage />
      <MyThought />
    </HomeDiv>
  );
}

export default Homepage;
