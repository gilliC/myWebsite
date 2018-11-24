import React from 'react';

import ArticleLink from './ArticleLink';
import {
  Container,
  ColinRow,
  FadeInContainer,
} from '../components/common_components';
import {ListActiveTitle} from './links_components';

export default class ActiveArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.changeState = () => this.setState({show: !this.state.show});
  }
  componentDidMount() {
    this.changeState();
  }
  componentDidUpdate(props, prevstate) {
    if (props.activeList.title !== this.props.activeList.title) {
      this.changeState();
    }
  }
  render() {
    let links = this.props.activeList.articles.map(article => {
      return <ArticleLink article={article} key={article.title} />;
    });
    const {show} = this.state;
    return (
      <FadeInContainer
        in={show}
        timeout={500}
        transformInitial="translateX(300px)"
        onExit={this.changeState}>
        <Container>
          <ColinRow>
            <ListActiveTitle fontFamily="Abril Fatface">
              {this.props.activeList.title}
            </ListActiveTitle>
            {links}
          </ColinRow>
        </Container>
      </FadeInContainer>
    );
  }
}
