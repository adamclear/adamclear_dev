import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { connect } from 'react-redux';
import * as headerActions from '../actions/headerActionCreator';

const styles = StyleSheet.create({
	header: {
		display: 'block'
	},
	navBar: {
		display: 'inline'
	}
});

export function Header() {
	return (
		<React.Fragment>
			<div className={css(styles.header)}>
				<nav className={css(styles.navBar)}>
					<ul>
						<li onClick={headerActions.changeContent('about')}>About</li>
						<li>Portfolio</li>
						<li onClick={headerActions.changeContent('about')}>Resume</li>
					</ul>
				</nav>
			</div>
		</React.Fragment>
	)
};

export const mapStateToProps = (state) => {
	return {
		current_content: state.current_content
	};
};

export const ReduxHeader = connect(mapStateToProps)(Header);