import styled from 'styled-components';
import ContainerCentered from './ContainerCentered';

export default styled(ContainerCentered)`
  align-items: ${props => props.align || 'center'};
  -webkit-align-items: ${props => props.align || 'center'};
  flex-direction: row;
`;