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
      Age: 0,
      FirstName: 'John',
      LastName: 'Doe',
      ID: -1,
    },
  };

  static propTypes = {
    player: PropTypes.shape({
      Age: PropTypes.number,
      BirthCity: PropTypes.string,
      BirthCountry: PropTypes.string,
      FirstName: PropTypes.string,
      ID: PropTypes.number,
      IsRookie: PropTypes.bool,
      JerseyNumber: PropTypes.number,
      LastName: PropTypes.string,
      Position: PropTypes.string,
      Weight: PropTypes.number,
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
