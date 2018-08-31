import React, {Component} from 'react';


export default class EcoTipItem  extends Component { constructor(props) {
  super(props); }

  render() { return( <div> <h2> {this.props.item.title}</h2>
    <h2>{this.props.item.id}</h2> </div>); } }


