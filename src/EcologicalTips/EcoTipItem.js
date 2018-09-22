import React, {Component} from 'react';

import './EcologicalTips.scss';
export default class EcoTipItem extends Component {
  render() {
    let classname = 'ecoItem ' + this.props.item.img.toLowerCase();
    return (
      <div className={classname}>
        <a href={this.props.item.src}>
          <div className="layer">
            <h2 className="ecoItem-text">
              {this.props.item.id}.{this.props.item.title}
            </h2>
            <p>{this.props.item.info}</p>
            Designed by Freepik
          </div>
        </a>
      </div>
    );
  }
}
