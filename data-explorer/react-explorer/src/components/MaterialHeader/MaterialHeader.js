/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MaterialHeader.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo.png';

class Header extends React.Component {
  static defaultProps = {
    title: 'MLB Data Explorer',
    subTitle: '',
  };

  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img src={logoUrl} width="38" height="38" alt="React" />
            <span className={s.brandTxt}>
              {this.props.title}}
            </span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>
              {this.props.title}
            </h1>
            <p className={s.bannerDesc}>
              {this.props.subTitle}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
