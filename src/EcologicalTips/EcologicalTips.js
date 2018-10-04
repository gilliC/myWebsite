import React, {Component} from 'react';
import EcoTipItem from './EcoTipItem';
import {ecologicalTips} from '../dataBase';

export default class EcologicalTips extends Component {
  render() {
    return (
      <div className="ecologicalTipsBody">
        {ecologicalTips.map(item => {
          return <EcoTipItem item={item} key={item.id} />;
        })}
      </div>
    );
  }
}
