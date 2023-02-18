import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { connect } from 'react-redux';
import * as headerActions from '../actions/headerActionCreator';

const styles = StyleSheet.create({
	header: {
		display: 'flex',
	},
	navBar: {
		display: 'flex',
		width: '100%'
	},
	navBarItem: {
		marginRight: '10px'
	}
});

class Header extends React.Component {
	constructor(props){
		super(props);
	}
	render () {
	const { changeContent } = this.props
		return (
			<React.Fragment>
				<div className={css(styles.header)}>
					<nav className={css(styles.navBar)}>
							<div className={css(styles.navBarItem)}
									 onClick={() => changeContent('about')}>About</div>
							<div className={css(styles.navBarItem)}
									 onClick={() => changeContent('portfolio')}>Portfolio</div>
							<div className={css(styles.navBarItem)}
									 onClick={() => changeContent('resume')}>Resume</div>
					</nav>
				</div>
			</React.Fragment>
		)
	}
};

export const mapStateToProps = (state) => {
	return {
		current_content: state.current_content
	};
};

export function mapDispatchToProps(dispatch) {
  return {
    changeContent: (content) => dispatch(headerActions.changeContent(content))
  }
}

export const ReduxHeader = connect(mapStateToProps, mapDispatchToProps)(Header);