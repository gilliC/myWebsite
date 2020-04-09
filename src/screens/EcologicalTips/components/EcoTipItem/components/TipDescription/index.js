import React from "react";
import DescriptionBold from "./DescriptionBold";
import DescriptionRegular from "./DescriptionRegular";

export default (props) => {
  const isItemWithBold = (item) => {
    return item.split("\b").length > 1;
  };
  const getLinesFromInfo = (info) => {
    return info.split("\n");
  };
  const { info } = props;
  if (!info) {
    return null;
  }
  const lines = getLinesFromInfo(info);
  const description = lines.map((item) => {
    if (isItemWithBold(item))
      return <DescriptionBold>{item}</DescriptionBold>;
    else return <DescriptionRegular>{item}<br /></DescriptionRegular>;
  });
  return description;
};
