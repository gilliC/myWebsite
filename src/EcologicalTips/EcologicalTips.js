import React, {Component} from 'react'; import EcoTipItem from './EcoTipItem';

export default class EcologicalTips  extends Component { constructor(props) {
  super(props); }

  render() { let item = {id:1,title:"RECYCLE"}; return ( <div> <h1>
      EcologicalTips</h1> <EcologicalTips item= {item}/> </div>); } }

