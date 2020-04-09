import React, { Component } from "react";

import TipDescription from "../TipDescription";
import { DescriptionSmall } from "../TipDescription/DescriptionSmall";
import { DescriptionRegular } from "../TipDescription/DescriptionRegular";

export default class TipContent extends Component {
  render() {
    const { clicked, info } = this.props;

    if (clicked) {
      return <TipDescription info={info} />;
    }

    return (
      <DescriptionRegular>
        Click for more information <br />
        <DescriptionSmall>The photo was designed by Freepik</DescriptionSmall>
      </DescriptionRegular>
    );
  }
}
