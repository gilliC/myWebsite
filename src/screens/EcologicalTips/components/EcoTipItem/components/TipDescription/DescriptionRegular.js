import styled from "styled-components";
import { mobileSize} from '../../../../../../app_components';

export default styled.p`
  font-family: ${props => (props.clicked ? 'Poiret One' : '')};
  font-size: ${props => (props.clicked ? '26px' : '')};
  text-align: center;

  padding:10px;
  margin-top:10px;
  @media screen and (max-width: ${mobileSize + 'px'}) {
    font-size: 0.85em;
    line-height: 0.9;
  }
`;
