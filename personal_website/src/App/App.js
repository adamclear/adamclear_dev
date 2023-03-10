import AppContext from './AppContext';
import { css, StyleSheet } from 'aphrodite';
import { ReduxBody } from '../Body/Body';
import { ReduxHeader } from '../Header/Header';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  App: {
    display: 'block'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_content: 'about'
    }
  }
  render () {
    return (
      <AppContext.Provider value={this.state}>
        <div className={css(styles.App)}>
          <ReduxHeader />
          <ReduxBody />
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  current_content: PropTypes.string,
};

App.defaultProps = {
  current_content: 'about'
}

export const mapStateToProps = (state) => {
  return {
    current_content: state.header.get('current_content')
  };
};

export const ReduxApp = connect(mapStateToProps)(App);
