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
import s from './PlayerProfile.css';

class PlayerProfile extends React.Component {
  static defaultProps = {
    player: {
      fullName: 'John Doe',
    },
  };

  static propTypes = {
    player: PropTypes.shape({
      firstName: PropTypes.string,
      fullName: PropTypes.string,
      currentTeam: PropTypes.shape({
        name: PropTypes.string,
        abbreviation: PropTypes.string,
      }),
    }),
  };

  render() {
    const player = this.props.player;
    const props = Object.entries(player).map((key, i) => {
      return (
        <tr key={i}>
          <td>{key[0]}</td>
          <td>{ typeof key[1] === 'object' ? JSON.stringify(key[1]) : key[1] }</td>
        </tr>
      );
    });

    return (
      <div>
        {/* Profile Card*/}
        <div className="col-md-4">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h5>
                {this.props.player.fullName}
              </h5>
            </div>
            <div>
              <div className="ibox-content no-padding border-left-right">
                <img
                  alt="image"
                  className="img-responsive"
                  src="/img/profile_big.jpg"
                />
              </div>
              <div className="ibox-content profile-content">
                <h4>
                  <strong />
                </h4>
                <p />
                <h5>About {this.props.player.firstName} </h5>
              </div>
            </div>
          </div>
        </div>
        {/* End Profile Card*/}

        <div className="row">
          <div className="col-lg-6" />
          <div className="col-lg-6">
            <div className="ibox float-e-margins">
              <div className="ibox-title">
                <h5>Data Table </h5>
              </div>

              <div className="ibox-content">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PlayerProfile);
