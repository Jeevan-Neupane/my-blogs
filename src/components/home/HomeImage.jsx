import React from "react";
import { Image, ImageDiv } from "./style";
import me from "../../../public/me.webp";
function HomeImage() {
  return (
    <ImageDiv>
      <Image src={me} />
    </ImageDiv>
  );
}

export default HomeImage;
