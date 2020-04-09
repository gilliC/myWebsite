import React from "react";
import Container from "./components/Container";
import PlatformsDevelopmentIcons from "./components/PlatformsDevelopmentIcons";
import PlatformsDevelopmentTexts from "./components/PlatformsDevelopmentTexts";
import Introduction from "./components/Introduction";
import LanguagesRow from "./components/LanguagesRow";

export default () => {
  return (
    <Container>
      <PlatformsDevelopmentIcons />
      <PlatformsDevelopmentTexts />
      <Introduction />
      <LanguagesRow />
    </Container>
  );
};
