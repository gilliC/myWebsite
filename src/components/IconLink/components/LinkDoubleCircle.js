import React from "react";
import styled, { keyframes } from "styled-components";
import { secondaryColor, tertiaryColor } from "../../../consts/colorsPalette";

const StyledLink = styled.a`
  :any-link {
    width: 100px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 3.5em;
    text-align: center;
    color: ${tertiaryColor};

    cursor: pointer;
    margin: 15px 30px;

    border-radius: 50%;
    border: solid 1px rgba(110, 211, 199, 0.5);

    -webkit-transition: box-shadow 0.2s;
    -moz-transition: box-shadow 0.2s;
    transition: box-shadow 0.2s;
  }

  :before {
    font-size: 48px;
    line-height: 90px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    display: block;
    -webkit-font-smoothing: antialiased;
  }

  :after {
    pointer-events: none;
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    content: "";

    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;

    top: 100;
    left: 100;
    padding: 0;

    box-shadow: 0 0 0 3px rgba(110, 211, 199, 0.5);
    -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
    -moz-transition: -moz-transform 0.2s, opacity 0.2s;
    transition: transform 0.2s, opacity 0.2s;
  }
  :hover:after {
    -webkit-transform: scale(0.85);
    -moz-transform: scale(0.85);
    -ms-transform: scale(0.85);
    transform: scale(0.85);
  }

  :hover {
    box-shadow: 0 0 0 7px rgba(110, 211, 199, 0.5);
    border: solid 1px rgba(110, 211, 199, 1);
    color: ${tertiaryColor};
  }
`;
export default (props) => {
  return (
    <div>
      <StyledLink {...props} className="hi-icon-effect-9a .hi-icon">
        {props.children}
      </StyledLink>
    </div>
  );
};
