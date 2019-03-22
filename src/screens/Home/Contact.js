import React from 'react';
import {Link} from '../../components/common_components';
import {FullHeightDiv, Title} from '../../components/common_components';
import styled from 'styled-components';
const linksList = [
  {
    href: 'https://github.com/gilliC',
    className: 'fab fa-github',
    key: 'github',
  },
  {
    href: 'mailto:gillicarmon@gmail.com',
    className: 'fas fa-envelope',
    key: 'mail',
  },
  {
    href: 'https://sourcerer.io/gillic',
    className: 'fab fa-stripe-s',
    key: 'sourcerer',
  },
  {
    href: 'https://twitter.com/GilliCarmon',
    className: 'fab fa-twitter',
    key: 'twitter',
  },
];

export default props => {
  let linksElements;
  if (props.isInMobile) {
    linksElements = linksList.map(props => {
      return <Link {...props} animation="ColorBackground" />;
    });
  } else {
    linksElements = linksList.map(props => {
      return <Link {...props} animation="Grow" />;
    });
  }

  return (
    <FullHeightDiv>
      <Title>Contact</Title>
      <SlantedDiv>{linksElements}</SlantedDiv>
    </FullHeightDiv>
  );
};

const SlantedDiv = styled.div``;
