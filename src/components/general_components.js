import React from 'react';
import styled, {keyframes} from 'styled-components';

export const primaryColor = '#5e82bc';
export const secondaryColor = 'white';
export const tertiaryColor = '#9e788f';

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
  align-items: center;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  flex-direction: row;
`;
export const ColinRow = styled.div`
  width: ${props => (props.size ? 100 / props.size + '%' : '100%')};
  float: ${props => (props.float: 'none')};
`;
/////////////// Texts /////////////
export const Title = styled.h1`
  font-size: ${props => props.fontSize || '5em'};
  text-align: ${props => props.textAlign || 'center'};
  font-family: ${props => props.fontFamily || 'Amatic SC'};
  color: ${props => props.color || 'black'};
`;
export const Text = styled.p`
  font-size: ${props => props.fontSize || '1em'};
  text-align: ${props => props.textAlign || 'center'};
  font-family: ${props => props.fontFamily || 'Amatic SC'};
  color: ${props => props.color || 'black'};
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
    color: inherit;
  }
  to {
    font-size: 8em;
  }`;
const icons_shrink = keyframes`
  from {
    font-size: 8em;
    color:${primaryColor};
  }
  to {
    font-size: 7em;
    color: inherit;
  }`;

const LinkGrows = styled.a`
  :any-link {
    color: ${primaryColor};
    animation: ${icons_shrink} 1s ease forwards;
    font-size: 7em;
    height: 100px;
    width: 100px;
    margin: 40px;
  }
  :hover {
    animation: ${icons_grown} 1s ease forwards;
  }
`;

const LinkChangeBackground = styled.a`
  :any-link {
    color: inherit;
    font-size: 7em;
    height: 100px;
    width: 100px;
    margin: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
  :hover {
    color: ${primaryColor};
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
