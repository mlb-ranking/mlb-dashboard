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
import s from './Player.css';

class Player extends React.Component {
  static defaultProps = {
    player: {
      age: 0,
      firstName: 'John',
      lastName: 'Doe',
      id: -1,
    },
  };

  static propTypes = {
    player: PropTypes.shape({
      age: PropTypes.number,
      birthCity: PropTypes.string,
      birthCountry: PropTypes.string,
      firstName: PropTypes.string,
      id: PropTypes.number,
      isRookie: PropTypes.bool,
      jerseyNumber: PropTypes.number,
      lastName: PropTypes.string,
      position: PropTypes.string,
      weight: PropTypes.number,
    }),
  };

  getName() {
    return `${this.props.player.FirstName} ${this.props.player.LastName}`;
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <article key={this.key}>
            <h2>
              {this.getName()} | {this.props.player.Age}
            </h2>
            <pre>
              Propderties: {JSON.stringify(this.props, null, '\t')}
            </pre>
          </article>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Player);
