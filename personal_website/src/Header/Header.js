import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { connect } from 'react-redux';
import * as headerActions from '../actions/headerActionCreator';

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		color: 'white',
		position: 'fixed',
		top: '0',
		zIndex: '999',
		width: '100%',
		background: `linear-gradient(to right, rgba(0,0,0,.5) 10%, rgba(255,255,255,0) 99%)`,
	},
	navBar: {
		display: 'flex',
		width: '100%'
	},
	navBarItem: {
		margin: '10px 15px',
		cursor: 'pointer',
	},
	separator: {
		height: '15px',
		width: '1px',
		backgroundColor: 'white',
		alignSelf: 'center'
	}
});

class Header extends React.Component {
	constructor(props){
		super(props);
	}
	render () {
	const { changeContent, current_content } = this.props;
		return (
			<React.Fragment>
				<div className={css(styles.header)}>
					<nav className={css(styles.navBar)}>
							<div className={css(styles.navBarItem)}
									onClick={() => changeContent('about')}>About Me</div>
							<div className={css(styles.separator)}></div>
							<div className={css(styles.navBarItem)}
									onClick={() => changeContent('portfolio')}>Portfolio</div>
							<div className={css(styles.separator)}></div>
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
		current_content: state.header.get('current_content')
	};
};

export function mapDispatchToProps(dispatch) {
  return {
    changeContent: (content) => dispatch(headerActions.changeContent(content))
  }
}

export const ReduxHeader = connect(mapStateToProps, mapDispatchToProps)(Header);