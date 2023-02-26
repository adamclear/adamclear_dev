import { css, StyleSheet } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
	Portfolio: {
		display: 'block',
		color: 'white'
	}
});

export function Portfolio() {
	return (
		<div className={css(styles.Portfolio)}>Portfolio</div>
	)
}