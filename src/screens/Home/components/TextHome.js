import styled from 'styled-components';

export default styled.p`
  padding: 20px;
  color: ${props => props.color || 'inherient'};
  font-size: 2em;
  text-align: center;
  font-family: Poiret One;
`;