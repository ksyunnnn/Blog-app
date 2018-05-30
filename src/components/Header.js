import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, LinkWrapper } from '../Styled';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        {[
          {
            to: '/',
            label: 'syunsukekobashi'
          },
          {
            to: '/about',
            label: <i aria-hidden="true" className="info circle icon" />
          },
          {
            to: '/articles',
            label: <i aria-hidden="true" className="folder icon" />
          }
        ].map((v, i) => (
          <LinkWrapper key={i}>
            <Link to={v.to} style={{ color: 'inherit', padding: '4px 8px' }}>
              {v.label}
            </Link>
          </LinkWrapper>
        ))}
      </HeaderWrapper>
    );
  }
}

export default Header;
