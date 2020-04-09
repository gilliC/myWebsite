import styled from 'styled-components';
import { mobileSize} from '../../../../../app_components';

const defaultTipHeight = '160px';
const hoverTipHeight = '350px';
const defaultTipWidthDesktop = '750px';
export const borderRadius = '25px';
export const defaultTipWidthMobile = '100%';

export default styled.div`
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