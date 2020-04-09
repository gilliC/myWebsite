import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  min-height: 70vh;
  color: white;
  h1 {
    font-family: Amatic SC;
    font-size: 65px;
    margin: 0;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  padding: 5%;
  height: 90%;
`;

export const RightSideDiv = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;
  border-style: double;
  border-width: 7px;
  border-color: rgba(255, 255, 255, 0.3);
`;
export const Text = styled.p`
  flex: 1;
  padding:20px;
  color: ${(props) => props.color || "inherient"};
  font-size: 2em;
  text-align: center;
  font-family: Poiret One;
`;
export const BoldText = styled.p`
  flex: 1;
  color: ${(props) => props.color || "inherient"};
  font-weight: bold;
  font-size: 3.5em;
  font-family: Abel;
`;
