import React, {Component} from 'react';

import ComponentItem from './ComponentItem';
import './CarouselStylesheet.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {components: this.props.children, componentIndex: 0};
    this.onClick = this.onClick.bind(this);
  }

  showChild(id) {
    if (this.props.children !== undefined) {
      return (
        <ComponentItem
          component={this.state.components[id]}
          index={id}
          key={id}
        />
      );
    }
  }

  onClick(e) {
    const control = e.currentTarget.dataset.name;
    const i = this.state.componentIndex;
    const compCount = this.state.components.length;
    console.log(control);
    if (control === 'right') {
      if (i + 1 < compCount)
        this.setState({
          componentIndex: i + 1,
        });
      else this.setState({componentIndex: 0});
    }
    if (control === 'left') {
      if (i - 1 >= 0) this.setState({componentIndex: i - 1});
      else this.setState({componentIndex: compCount - 1});
    }
  }

  componentWillReceiveProps({children}) {
    this.setState({
      components: children,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="carousel-row">
          <div className="col-md-1" onClick={this.onClick} data-name="left">
            <i className="fas fa-chevron-left icon-style" size="7px" />
          </div>
          <div className="col-md-10">
            {this.showChild(this.state.componentIndex)}
          </div>
          <div className="col-md-1" onClick={this.onClick} data-name="right">
            <i className="fas fa-chevron-right icon-style" />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
