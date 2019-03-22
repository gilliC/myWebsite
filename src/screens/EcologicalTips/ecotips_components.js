import styled from 'styled-components';
import {primaryColor, mobileSize} from '../../app_components';

//////////// CONSTS /////////////

const defaultTipHeight = '160px';
const hoverTipHeight = '350px';
const defaultTipWidthDesktop = '750px';
const defaultTipWidthMobile = '100%';
const borderRadius = '25px';

//////////// CONTAINERS ////////////

export const EcoTipsContainer = styled.div`
  margin-top: 20px;
`;

export const EcoItem = styled.div`
  content: '';
  width: ${defaultTipWidthDesktop};
  height: ${props => (props.clicked ? hoverTipHeight : defaultTipHeight)};
  display: inline-block;
  position: relative;
  transition: all 750ms ease;
  margin-bottom: 5px;

  :after {
    content: '';
    opacity: ${props => (props.clicked ? 0.75 : 1)};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    border-radius: ${borderRadius};
    transition: ${props => (props.clicked ? ' all 500ms ease' : '')};
    background-position: center;
    background-image: ${props => `url(${props.img}) `};
  }
  :hover:after {
    opacity: ${props => (props.clicked ? 0.15 : 0.45)};
    z-index: 5;
    position: absolute;
    transition: height 0.35s ease-in-out;
    -moz-transition: opacity 0.35s ease-in-out;
    -webkit-transition: opacity 0.35s ease-in-out;
  }

  @media screen and (max-width: ${mobileSize + 'px'}) {
    width: ${defaultTipWidthMobile};
    opacity: 1;
    :after {
      opacity: ${props => (props.clicked ? 0.15 : 0.45)};
      z-index: 5;
      position: absolute;
      transition: height 0.35s ease-in-out;
      -moz-transition: opacity 0.35s ease-in-out;
      -webkit-transition: opacity 0.35s ease-in-out;
    }
  }
`;

export const Layer = styled.div`
  background-color: ${primaryColor};
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -3;
  border-radius: ${borderRadius};
  transition: background-color 500ms ease;

  ${EcoItem}:hover {
    background-color: black;
    position: absolute;
    z-index: 5;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  @media screen and (max-width: ${mobileSize + 'px'}) {
    width: ${defaultTipWidthMobile};
    position: absolute;
    z-index: 3;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

///////////// TEXTS /////////////

export const EcoItemTitle = styled.h2`
  font-family: Josefin Slab;
  font-size: 50px;
  display: ${props => (props.clicked ? 'none' : 'block')};
  padding: ${props => (props.clicked ? '10px' : '0px')};

  ${EcoItem}:hover {
    display: ${props => (props.clicked ? 'none' : 'block')};
    color: #ffffff;
  }
  @media screen and (max-width: ${mobileSize + 'px'}) {
    font-size: 1em;
  }
`;
export const EcoItemText = styled.p`
  font-family: ${props => (props.clicked ? 'Poiret One' : '')};
  font-size: ${props => (props.clicked ? '26px' : '')};
  text-align: center;
  margin: 5px;
  margin-top: 20px;
  @media screen and (max-width: ${mobileSize + 'px'}) {
    font-size: 0.85em;
    line-height: 0.9;
  }
`;
///////////// IMAGES /////////////
