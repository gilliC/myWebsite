import React, { useState, useEffect } from "react";
import Arrow from "./component/Arrow";
import CarouselContainer from "./component/CarouselContainer";
import CenterItem from "./component/CenterItem";

export default (props) => {
  const { children } = props;

  const [components, setComponents] = useState(children);
  const [show, setShow] = useState(true);
  const [componentIndex, setComponentIndex] = useState(0);


  const toggleShow = () => {
    setShow(!show);
  };

  const showChild = (id) => {
    if (!children) return;
    const component = Array.isArray(components) ? components[id] : components;
    return <div> {component} </div>;
  };

  useEffect(() => {
    toggleShow();
    setComponents(children);
  }, [componentIndex, children]);

  const getNewIndexByControl = (control) => {
    const compCount =
      components && Array.isArray(components) ? components.length : 1;
    if (control === "right") {
      return componentIndex + 1 < compCount ? componentIndex + 1 : 0;
    }
    if (control === "left") {
      return componentIndex - 1 >= 0 ? componentIndex - 1 : compCount - 1;
    }
  };

  const onClick = (e) => {
    const control = e.currentTarget.dataset.name;
    const newIndex = getNewIndexByControl(control);
    setComponentIndex(newIndex);
  };

  return (
    <CarouselContainer>
      <Arrow
        onClick={onClick}
        className="fas fa-chevron-left "
        dataName="left"
      />
      <CenterItem
        show={show}
        showChild={showChild}
        componentIndex={componentIndex}
        changeState={toggleShow}
      />
      <Arrow
        onClick={onClick}
        className="fas fa-chevron-right "
        dataName="right"
      />
    </CarouselContainer>
  );
};
