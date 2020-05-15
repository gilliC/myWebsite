import React from "react";
import Row from "common/container/Row";
import CodeStandartItem from "./components/CodeStandartItem";

export default (props) => {
  return (
    <Row>
      <CodeStandartItem text="CLEAN" />
      <CodeStandartItem text="EFFICIENT" />
      <CodeStandartItem text="TESTABLE" />
      <CodeStandartItem text="ELEGANT" />
    </Row>
  );
};
