import React from 'react';
import {Link} from '../components/common_components';

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

export default () => {
  let linksElements = linksList.map(props => {
    return <Link {...props} animation="Grow" />;
  });
  return (
    <div>
      <h1>Contact:</h1>
      {linksElements}
    </div>
  );
};
