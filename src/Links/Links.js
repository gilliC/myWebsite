import React from 'react';
import LinksList from './LinksList';
import ActiveList from './ActiveArticlesList';

import {LinksContainer, LinksListContainer} from './links_components';
import {ColinRow} from '../components/general_components';

import './Links.scss';

export default props => {
  return (
    <LinksContainer>
      <LinksListContainer>
        <LinksList />
      </LinksListContainer>
      <ColinRow float="left" size={2}>
        <ActiveList link={{title: 'React'}} />
      </ColinRow>
    </LinksContainer>
  );
};
