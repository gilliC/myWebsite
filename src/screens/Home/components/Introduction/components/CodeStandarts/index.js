import React from "react";
import Row from "common/container/Row";
import Text from "common/text/Text";
import { PRIMARY_COLOR } from "common/colorsPalette";

export default (props) => {
  return (
    <Row>
      <div
        style={{
          borderTopColor: PRIMARY_COLOR,
          borderTopWidth: 3,
          borderTopStyle: "solid",
          paddingTop: 20,
          flex: 1,
          marginRight:35
        }}
      >
        <Text style={{ textAlign: "center" }}>CLEAN</Text>
      </div>
      <div
        style={{
          borderTopColor: PRIMARY_COLOR,
          borderTopWidth: 3,
          borderTopStyle: "solid",
          paddingTop: 20,
          flex: 1,
          marginRight:35
        }}
      >
        <Text style={{ textAlign: "center" }}>EFFICIENT</Text>
      </div>
      <div
        style={{
          borderTopColor: PRIMARY_COLOR,
          borderTopWidth: 3,
          borderTopStyle: "solid",
          paddingTop: 20,
          flex: 1,
          marginRight:35
        }}
      >
        <Text style={{ textAlign: "center" }}>TESTABLE</Text>
      </div>
      <div
        style={{
          borderTopColor: PRIMARY_COLOR,
          borderTopWidth: 3,
          borderTopStyle: "solid",
          paddingTop: 20,
          flex: 1,
          marginRight:35
        }}
      >
        <Text style={{ textAlign: "center" }}>ELEGANT</Text>
      </div>
    </Row>
  );
};
