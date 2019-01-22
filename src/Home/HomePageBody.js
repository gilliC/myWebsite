import React from 'react';
import {Link} from '../components/common_components';
import {mobileSize} from '../app_components';
const linksList = [
  {
    href: 'https://github.com/gilliC',
    className: 'fab fa-github',
    key: 'github',
  },
  {
    href: 'https://www.instagram.com/gilli_carmon/',
    className: 'fab fa-instagram',
    key: 'instagram',
  },
  {
    href: 'mailto:gillicarmon@gmail.com',
    className: 'fas fa-envelope',
    key: 'mail',
  },
  {
    href: 'https://sourcerer.io/gillic',
    className: 'fab fa-stripe-s',
    key: 'sourcerer',
  },
  {
    href: 'https://twitter.com/GilliCarmon',
    className: 'fab fa-twitter',
    key: 'twitter',
  },
];

export default props => {
  let linksElements;
  linksElements = linksList.map(props => {
    return <Link {...props} animation="Grow" />;
  });
  if (props.screenSize <= mobileSize)
    linksElements = linksList.map(props => {
      return <Link {...props} animation="ColorBackground" />;
    });

  return (
    <div>
      <h1>Contact:</h1>
      {linksElements}
    </div>
  );
};
