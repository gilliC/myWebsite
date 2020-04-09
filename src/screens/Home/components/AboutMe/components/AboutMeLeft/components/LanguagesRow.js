import React from "react";
import Row from "./Row";
import IconHome from "../../../../IconHome";

export default (props) => {
  return (
    <Row>
      <IconHome className="fab fa-react" title="react" />
      <IconHome className="fab fa-python" title="python" />
      <IconHome className="fab fa-java" title="java" />
      <IconHome className="fab fa-js" title="javascript" />
    </Row>
  );
};
