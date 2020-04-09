import React from "react";
import { primaryColor } from "../../../../../app_components";
import TextHome from "../../TextHome";
import TextBold from "../../TextBold";

export default (props) => {
  return (
    <div>
      <TextBold color={primaryColor}>
        Hi, my name is Gilli, I'm a web & mobile developer from Israel.
      </TextBold>
      <TextHome color={primaryColor}>
        I'm a junior & enthusiastic programmer, looking for some new projects to
        work on. I enjoy what I do, which promises great results. I have taught
        myself React, React Native and Python. I'm serious and open minded to
        learn new things. I have also learned c# & Java, but most of my work
        focuses on websites and mobile application.
      </TextHome>
    </div>
  );
};
