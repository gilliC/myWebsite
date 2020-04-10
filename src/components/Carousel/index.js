import React, { Component } from "react";
import Arrow from "./component/Arrow";
import CarouselContainer from "./component/CarouselContainer";
import CenterItem from "./component/CenterItem";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { components: props.children, componentIndex: 0 };
  }

  changeState = () => {
    this.setState({ show: !this.state.show });
  };

  showChild = (id) => {
    const { children } = this.props;
    const { components } = this.state;
    if (!children) return;
    const component = Array.isArray(components) ? components[id] : components;
    return <div> {component} </div>;
  };
  componentDidMount() {
    this.changeState();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.componentIndex !== prevState.componentIndex) {
      this.changeState();
    }
  }
  componentWillReceiveProps({ children }) {
    this.setState({
      components: children,
    });
  }

  onClick(e) {
    const control = e.currentTarget.dataset.name;
    const i = this.state.componentIndex;
    const compCount = this.state.components.length;
    if (control === "right") {
      if (i + 1 < compCount)
        this.setState({
          componentIndex: i + 1,
        });
      else this.setState({ componentIndex: 0 });
    }
    if (control === "left") {
      if (i - 1 >= 0) this.setState({ componentIndex: i - 1 });
      else this.setState({ componentIndex: compCount - 1 });
    }
  }

  render() {
    const { show, componentIndex } = this.state;
    return (
      <CarouselContainer>
        <Arrow
          onClick={this.onClick}
          className="fas fa-chevron-left "
          dataName="left"
        />
        <CenterItem
          show={show}
          showChild={this.showChild}
          componentIndex={componentIndex}
          changeState={this.changeState}
        />
        <Arrow
          onClick={this.onClick}
          className="fas fa-chevron-right "
          dataName="right"
        />
      </CarouselContainer>
    );
  }
}

export default Carousel;
