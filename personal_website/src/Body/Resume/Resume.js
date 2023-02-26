import { css, StyleSheet } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
	Resume: {
		display: 'block',
		color: 'white'
	}
});

export function Resume() {
	return (
		<div className={css(styles.Resume)}>Resume</div>
	)
}