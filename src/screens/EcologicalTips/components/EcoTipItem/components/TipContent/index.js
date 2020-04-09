import React from "react";

import TipDescription from "../TipDescription";
import DescriptionSmall from "../TipDescription/DescriptionSmall";
import DescriptionRegular from "../TipDescription/DescriptionRegular";

export default (props) => {
  const { clicked, info } = props;

  if (clicked) {
    return <TipDescription info={info} />;
  }

  return (
    <DescriptionRegular>
      Click for more information <br />
      <DescriptionSmall>The photo was designed by Freepik</DescriptionSmall>
    </DescriptionRegular>
  );
};
