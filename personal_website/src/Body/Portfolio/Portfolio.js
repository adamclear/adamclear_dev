import { css, StyleSheet } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
	Portfolio: {
		display: 'flex',
		color: 'white',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	projectContainer: {
		display: 'flex',
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
	},
	separator: {
		height: '1px',
		width: '10em',
		backgroundColor: 'white',
		alignSelf: 'center'
	}
});

export function Portfolio() {
	return (
		<div className={css(styles.Portfolio)}>
			<div className={css(styles.headerSpacer)}></div>
			<div className={css(styles.projectContainer)}>
				<div className={css(styles.projectBlock)}></div>
				<div className={css(styles.separator)}></div>
				<div className={css(styles.projectBlock)}></div>
				<div className={css(styles.separator)}></div>
				<div className={css(styles.projectBlock)}></div>
			</div>
		</div>
	)
}