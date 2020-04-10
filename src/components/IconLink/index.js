import React from "react";
import LinkChangeBackground from "./components/LinkChangeBackground";
import LinkGrows from "./components/LinkGrows";
import LinkDoubleCircle from "./components/LinkDoubleCircle";

export const linkAnimationTypes = {
  COLOR_BACKGROUND: "ColorBackground",
  GROW: "Grow",
  DOUBLE_CIRCLE: "DoubleCircle",
};

export default (props) => {
  const { animation, className } = props;
  switch (animation) {
    case linkAnimationTypes.COLOR_BACKGROUND: {
      return (
        <LinkChangeBackground
          {...props}
          className=""
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className={className} />
        </LinkChangeBackground>
      );
    }

    case linkAnimationTypes.DOUBLE_CIRCLE:
      return (
        <LinkDoubleCircle
          {...props}
          target="_blank"
          rel="noreferrer noopener"
          className=""
        >
          <i className={className} />
        </LinkDoubleCircle>
      );

    case linkAnimationTypes.GROW:
    default: {
      return (
        <LinkGrows
          {...props}
          target="_blank"
          rel="noreferrer noopener"
          className=""
        >
          <i className={className} />
        </LinkGrows>
      );
    }
  }
};
