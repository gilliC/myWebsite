import React from 'react';
import {Link} from 'react-router-dom';

import {LinkContainer, LinkTitle} from './sidebar_components';

export default props => {
  return (
    <LinkContainer>
      <Link to={props.href}>
        <LinkTitle>{props.title}</LinkTitle>
      </Link>
    </LinkContainer>
  );
};
