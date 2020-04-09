import React from "react";
import Container from "./components/Container";
import Row from "./components/Row";
import Title from "./components/Title";
import TextHome from "../../../TextHome";
import IconHome from "../../../IconHome";
import PlatformsDevelopmentIcons from "./components/PlatformsDevelopmentIcons";
import PlatformsDevelopmentTexts from "./components/PlatformsDevelopmentTexts";
import Introduction from "./components/Introduction";
import LanguagesRow from "./components/LanguagesRow";

export default (props) => {
  return (
    <Container>
      <PlatformsDevelopmentIcons />
      <PlatformsDevelopmentTexts />
      <Introduction />
      <LanguagesRow />
    </Container>
  );
};
