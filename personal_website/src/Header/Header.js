import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { connect } from 'react-redux';
import * as headerActions from '../actions/headerActionCreator';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import emailLogo from '../assets/email.png';

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
		width: '100%',
		fontFamily: 'monospace',
		fontSize: '16px'
	},
	navBarItem: {
		margin: '10px 15px',
		cursor: 'pointer',
	},
	icons: {
		display: 'flex',
		alignItems: 'center',
		position: 'fixed',
		right: '0',
		height: '39px'
	},
	separator: {
		height: '15px',
		width: '1px',
		backgroundColor: 'white',
		alignSelf: 'center'
	},
	github: {
		width: '20px',
		height: '20px',
		margin: '10px 5px',
		cursor: 'pointer'
	},
	linkedin: {
		width: '20px',
		height: '20px',
		margin: '10px 5px',
		cursor: 'pointer'
	},
	email: {
		width: '20px',
		height: '20px',
		margin: '10px 5px',
		cursor: 'pointer'
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
					<div className={css(styles.icons)}>
						<a href="https://github.com/adamclear"
									target="_blank">
							<img className={css(styles.github)}
									src={githubLogo}></img>
						</a>
						<a href="https://www.linkedin.com/in/adam-clear/"
									target="_blank">
							<img className={css(styles.linkedin)}
									src={linkedinLogo}></img>
						</a>
						<a href="mailto:adam.clear.0@gmail.com">
							<img className={css(styles.email)}
									src={emailLogo}></img>
						</a>
					</div>
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