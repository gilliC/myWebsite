import React, {Fragment} from 'react';
import {HeaderContainer} from '../app_components';
import NavigationBar from './TopNavigationBar';

export default props => {
  const {pages, width} = props;
  if (width > 770) {
    return (
      <Fragment>
        <HeaderContainer>
          <NavigationBar pages={props.pages} />
        </HeaderContainer>
        {props.children}
      </Fragment>
    );
  } else return props.children;
};
