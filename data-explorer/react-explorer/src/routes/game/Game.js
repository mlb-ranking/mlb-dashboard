import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Game.css';

class Game extends React.Component {

  static propTypes = {
    game: PropTypes.shape({
      game: PropTypes.object,
      player: PropTypes.object,
      team: PropTypes.object,
      stats: PropTypes.object,
    }),
  };


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <article key={this.key}>
            <h2> Game </h2>
            <pre>
              Propderties: {JSON.stringify(this.props, null, '\t')}
            </pre>
          </article>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Game);
