import React from "react";
import HomeContainer from "./components/HomeContainer";
import Introduction from "./components/Introduction";

export default (props) => {
  return (
    <HomeContainer>
      <Introduction />
      <div style={{backgroundColor:'teal',flex:1}}>
        <h1>New Home Route2</h1>
      </div>
    </HomeContainer>
  );
};
