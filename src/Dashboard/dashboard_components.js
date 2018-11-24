import styled from 'styled-components';

/////////////// DIVS /////////////
export const DashboardContainer = styled.div`
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  float: ${props => props.float || 'none'};
  h1 {
    font-family: Amatic SC;
    font-size: ${props => props.fontSize + 'em' || '3em'};
  }
`;
