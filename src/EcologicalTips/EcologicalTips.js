import React from 'react';
import EcoTipItem from './EcoTipItem';
import {ecologicalTips} from '../services/dataBase';

import {EcoTipsContainer} from './ecotips_components';

export default props => {
  return (
    <EcoTipsContainer>
      {ecologicalTips.map(item => {
        return <EcoTipItem item={item} key={item.id} />;
      })}
    </EcoTipsContainer>
  );
};
