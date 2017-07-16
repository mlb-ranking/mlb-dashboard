import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Player.css';

class Player extends React.Component {
  static propTypes = PropTypes.shape({
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
  });

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <article key={this.key}>
            <h2>
              {this.props.FirstName} {this.props.LastName} | {this.props.Age}{' '}
            </h2>
            <pre>
              Properties: {JSON.stringify(this.props, null, '\t')}
            </pre>
          </article>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Player);
