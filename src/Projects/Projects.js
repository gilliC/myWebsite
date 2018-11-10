import React from 'react';
import {Container} from '../components/general_components';

import ProjectCard from './ProjectCard';

export default props => {
  return (
    <Container>
      <ProjectCard
        title="Goals Tracker"
        descripton="A simple react native app to track the amount of steps you take to achieve your goals "
      />
    </Container>
  );
};
