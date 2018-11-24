import React from 'react';
import {LinkText, LinkTextSpan} from './links_components';

export default props => {
  const {article} = props;
  return (
    <a href={article.link} target="_blank">
      <LinkText>
        {props.article.title}
        <LinkTextSpan>{' / ' + article.writer}</LinkTextSpan>
      </LinkText>
    </a>
  );
};
