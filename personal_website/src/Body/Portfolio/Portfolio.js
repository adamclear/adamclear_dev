import { css, StyleSheet } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
	Portfolio: {
		display: 'flex',
		color: 'white',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	projectBlock: {
		height: '25em',
		width: '75%',
		maxWidth: '20em',
		backgroundColor: 'white',
		margin: '5em',
		alignSelf: 'center'
	},
	headerSpacer: {
		height: '1px',
		marginBottom: '5em'
	}
});

export function Portfolio() {
	return (
		<div className={css(styles.Portfolio)}>
			<div className={css(styles.headerSpacer)}></div>
			<div className={css(styles.projectBlock)}></div>
			<div className={css(styles.projectBlock)}></div>
			<div className={css(styles.projectBlock)}></div>
		</div>
	)
}