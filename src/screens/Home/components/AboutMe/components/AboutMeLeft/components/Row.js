import styled from "styled-components";

export default styled.div`
  flex: ${props => props.flex || 1 };
  height: ${props => props.height || 'auto'}
  display: flex;
  flex-direction: row;
`;
