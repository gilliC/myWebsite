import React, {Component} from 'react';

import './EcologicalTips.scss';
export default class EcoTipItem extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({clicked: !this.state.clicked});
  }
  render() {
    let classname = this.state.clicked ? 'ecoItem-clicked ' : 'ecoItem ';
    classname += this.props.item.img.toLowerCase();
    const clicked = this.state.clicked;
    let info = '';
    if (this.props.item.info !== undefined) {
      info = this.props.item.info.split('\n').map(function(item, key) {
        let bold = '';
        if (item.split('\b').length > 1) bold = 'bold';
        return (
          <span className={bold} key={key}>
            {item}
            <br />
          </span>
        );
      });
    }
    let content = (
      <p>
        Click for more information <br />
        <span className="small-txt">The photo was designed by Freepik</span>
      </p>
    );
    if (clicked) content = <p>{info}</p>;
    //let classname = 'ecoItem ' + this.props.item.img.toLowerCase();
    return (
      <div className={classname} onClick={this.onClick}>
        <a href={this.props.item.src}>
          <div className="layer">
            <h2 className="ecoItem-text">{this.props.item.title}</h2>
            {content}
          </div>
        </a>
      </div>
    );
  }
}
