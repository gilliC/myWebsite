import React from 'react';
import styled, {keyframes} from 'styled-components';
import transition from 'styled-transition-group';
import {primaryColor, secondaryColor, tertiaryColor , mobileSize} from '../app_components';

/////////////// DIVS /////////////
export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  flex-direction: column;
`;
export const ContainerRow = styled.div`
  align-items: ${props => props.align || 'center'};
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: ${props => props.align || 'center'};
  flex-direction: row;
`;
export const ColinRow = styled.div`
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  float: ${props => (props.float: 'none')};
  display: ${props => props.display || 'initial'};
`;

export const FadeInContainer = transition.div`
  &:enter {
    opacity: 0.01;
    transform: ${props => props.transformInitial || 'translateX(0)'}
  }
  &:enter-active {
    opacity: 1;
     transform: translateX(0);
    transition: all 1000ms ease-in;
    transition-duration: ${props => props.timeout + 'ms' || '1000ms'}
    transform: ${props => props.transformFinal || 'translateX(0)'}
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }
`;
;
/////////////// Texts /////////////
export const Title = styled.h1`
  font-size: ${props => props.fontSize || '5em'};
  text-align: ${props => props.textAlign || 'center'};
  font-family: ${props => props.fontFamily || 'Amatic SC'};
  color: ${props => props.color || 'black'};
  @media screen and (max-width: ${mobileSize + 'px'}) {
    font-size: 1em;
  }
`;
export const Text = styled.p`
  font-size: ${props => props.fontSize || '1em'};
  text-align: ${props => props.textAlign || 'center'};
  font-family: ${props => props.fontFamily || 'Amatic SC'};
  color: ${props => props.color || 'black'};
  @media screen and (max-width: ${mobileSize + 'px'}) {
    font-size: 1em;
  }
`;
export const TextSpan = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  text-align: ${props => props.textAlign || 'center'};
  font-family: ${props => props.fontFamily || 'Amatic SC'};
  color: ${props => props.color || 'black'};
  @media screen and (max-width: ${mobileSize + 'px'}) {
    font-size: 1em;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;
export const SmallText = styled.span`
  font-size: 15px;
`;

/////////////// LINKS /////////////

const icons_grown = keyframes` 
 from {
    font-size: 7em;
  }
  to {
    font-size: 8em;
    opacity:0.7;
  }`;
const icons_shrink = keyframes`
  from {
    font-size: 8em;
    color: #313131;
  }
  to {
    font-size: 7em;
  }`;

const LinkGrows = styled.a`
  :any-link {
    width: ${props => props.width || '100%'};
    color: #313131;
    animation: ${icons_shrink} 1s ease forwards;
    font-size: 7em;
    height: 100px;
    margin: 40px;
  }
  :hover {
    animation: ${icons_grown} 1s ease forwards;
  }
`;

const LinkChangeBackground = styled.a`
  :any-link {
    width: ${props => props.width || '100%'};
    color: ${primaryColor};
    font-size: 7em;
    height: 100px;
    opacity: 1;
    margin: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
  :hover {
    color: ${primaryColor};
    opacity: 0.7;
  }
  @media screen and (max-width: ${mobileSize + 'px'}) {
    :any-link {
      height: 50px;
      font-size: 3.5em;
      margin: 5px;
    }
  }
`;

export const Link = props => {
  switch (props.animation) {
    case 'ColorBackground': {
      return (
        <LinkChangeBackground
          {...props}
          className=""
          target="_blank"
          rel="noreferrer noopener">
          <i className={props.className} />
        </LinkChangeBackground>
      );
    }

    case 'Grow':
    default: {
      return (
        <LinkGrows
          {...props}
          className=""
          target="_blank"
          rel="noreferrer noopener">
          <i className={props.className} />
        </LinkGrows>
      );
    }
  }
};

/////////////// INPUTS /////////////

export const MainInput = styled.input`
  color: ${primaryColor};
  padding: 15px;
  background-color: white;
  border: 2px solid ${primaryColor} !important;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 5px;
  height: 30px;
  width: 75%;
  :focus {
    outline: 0 !important;
  }
`;

/////////////// CAROUSEL /////////////
export const ComponentItem = ({component}) => {
  return <div>{component} </div>;
};

export const CarouselRow = styled.div`
  min-width: 400px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  :not([class]) {
    width: 100%;
  }

  & > [class*='col-'] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: ${mobileSize + 'px'}) {
    min-width: 0px;
  }
`;

export const Arrow = styled.i`
  font-size: 4em;
  color: ${primaryColor};
  align-self: center;
  @media screen and (max-width: ${mobileSize + 'px'}) {
    font-size: 1em;
  }
`;
