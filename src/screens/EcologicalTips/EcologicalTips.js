import React, {useEffect, useState} from 'react';
import EcoTipItem from './EcoTipItem';
import ConnectServer from '../../classes/connectServer';

import {EcoTipsContainer} from './ecotips_components';

export default props => {
  const [data, dataSet] = useState(false);
  useEffect(() => {
    async function fetchMyAPI() {
      const cs = new ConnectServer();
      let res = await cs.getEcoTips();
      dataSet(res);
    }

    fetchMyAPI();
  }, []);
  if (data) {
    return (
      <EcoTipsContainer>
        {data.map(item => {
          return <EcoTipItem item={item} key={item.id} />;
        })}
      </EcoTipsContainer>
    );
  }
  return <h1>Loading...</h1>;
};
