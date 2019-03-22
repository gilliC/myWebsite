import React from 'react';

import {Link} from 'react-router-dom';
import {Title} from '../../components/common_components';
import {SideBarContainer} from './sidebar_components';
import logo from '../../drawable/websiteLogo.png';
import LinkItem from './LinkItem';
import {LogoImg} from '../TopNavigationBar/topNavigationbar_components';

export default props => {
  const {pages} = props;
  return (
    <SideBarContainer>
      <Title color="white" fontSize="2em" fontFamily="Abel">
        <Link to="/">Gilli Carmon</Link>
      </Title>
      {pages.map(page => {
        return <LinkItem href={page.path} title={page.title} key={page.path} />;
      })}
      <LogoImg src={logo} />
    </SideBarContainer>
  );
};
