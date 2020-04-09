import styled from "styled-components";

export const DescriptionRegular = styled.p`
  font-family: ${(props) => (props.clicked ? "Poiret One" : "")};
  font-size: ${(props) => (props.clicked ? "26px" : "")};
  text-align: center;
  margin: 5px;
  margin-top: 20px;
`;
