import React, {Component} from 'react';
import EcoTipItem from './EcoTipItem';

export default class EcologicalTips extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = [
      {
        id: 1,
        title: 'RECYCLE!',
        img: 'recycle',
        src:
          'https://www.freepik.com/free-photo/crop-hands-throwing-rubbish-in-bins_2254651.htm',
      },
      {
        id: 2,
        title: 'Save Water',
        img: 'water',
        src:
          'https://www.freepik.com/free-photo/water-background-with-splashes_1101025.htm',
      },
      {
        id: 3,
        title: 'Use public transport',
        img: 'publictransport',
        src:
          'https://www.freepik.com/free-vector/urban-bus-and-bus-stop-with-flat-design_2383281.htm',
      },
    ];

    return (
      <div className="ecologicalTipsBody">
        {' '}
        {items.map(item => {
          return <EcoTipItem item={item} />;
        })}{' '}
      </div>
    );
  }
}
