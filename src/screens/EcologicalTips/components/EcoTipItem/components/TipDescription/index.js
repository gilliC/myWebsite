import React, { Component } from "react";
import { DescriptionBold } from "./DescriptionBold";
import { DescriptionRegular } from "./DescriptionRegular";

export default class TipDescription extends Component {
  isItemWithBold = (item) => {
    return item.split("\b").length > 1;
  };
  render() {
    const { info } = this.props;
    if (!info) {
      return null;
    }
    const description = info.split("\n").map((item) => {
      if (this.isItemWithBold(item))
        return <DescriptionBold>{item}</DescriptionBold>;
      else return <DescriptionRegular>{item}</DescriptionRegular>;
    });
    return description;
  }
}
