import React, {Component} from 'react';
import EcoTipItem from './EcoTipItem';

export default class EcologicalTips extends Component {
  render() {
    let items = [
      {
        id: 1,
        title: 'RECYCLE!',
        img: 'recycle',
        src:
          'https://www.freepik.com/free-photo/crop-hands-throwing-rubbish-in-bins_2254651.htm',
        info:
          'Recycling conserves resources \n When we recycle, used materials are converted into new products, reducing the need to consume natural resources. If used materials are not recycled, new products are made by extracting fresh, raw material from the Earth, through mining and forestry.\n Recycling helps conserve important raw materials and protects natural habitats for the future.',
      },

      {
        id: 2,
        title: 'Use public transport',
        img: 'publictransport',
        src:
          'https://www.freepik.com/free-vector/urban-bus-and-bus-stop-with-flat-design_2383281.htm',
      },

      {
        id: 3,
        title: 'Smart shopping',
        img: 'smartshopping',
        src:
          'https://www.freepik.com/free-vector/food-store-background-design_1059377.htm',
      },
      {
        id: 4,
        title: 'Educate others',
        img: 'educateothers',
        src:
          'https://www.freepik.com/free-vector/lovely-hand-drawn-education-concept_2826345.htm',
      },
      {
        id: 5,
        title: 'Avoid using plastic bags',
        img: 'plasticbags',
        src:
          'https://www.freepik.com/free-photo/crop-hands-throwing-rubbish-in-bins_2254651.htm',
      },
      {
        id: 6,
        title: 'Save Water',
        img: 'water',
        src:
          'https://www.freepik.com/free-photo/water-background-with-splashes_1101025.htm',
      },
    ];

    return (
      <div className="ecologicalTipsBody">
        {items.map(item => {
          return <EcoTipItem item={item} />;
        })}
      </div>
    );
  }
}
