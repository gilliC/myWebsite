import React from "react";
import EcoTipItem from "./components/EcoTipItem";
import { ecologicalTips } from "../../services/dataBase";

import EcoTipsContainer from "./components/EcoTipsContainer";

export default (props) => {
  const itemsComponents = ecologicalTips.map((item) => {
    return <EcoTipItem item={item} key={item.id} />;
  });
  return <EcoTipsContainer>{itemsComponents}</EcoTipsContainer>;
};
