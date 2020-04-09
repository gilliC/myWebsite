import styled from "styled-components";
import { mobileSize} from '../../../../../app_components';
import EcoItemContainerImg from "./EcoItemContainerImg";

export default  styled.h2`
  font-family: Josefin Slab;
  font-size: 50px;

  display: ${props => (props.clicked ? 'none' : 'block')};
  padding: ${props => (props.clicked ? '10px' : '0px')};

  ${EcoItemContainerImg}:hover {
    display: ${props => (props.clicked ? 'none' : 'block')};
    color: #ffffff;
  }
  @media screen and (max-width: ${mobileSize + 'px'}) {
    font-size: 1em;
  }
`;