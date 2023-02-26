import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import bgimage from '../../assets/about_me.jpg';

const styles = StyleSheet.create({
	About: {
		height: '100vh',
		display: 'flex',
		color: 'white',
	},
	image: {
		// margin: '15px',
		height: '1500px',
		maxWidth: '1000px',
		backgroundImage: `linear-gradient(to left, rgba(0,0,0,1), rgba(255,255,255,0) 30%), url(${bgimage})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		flex: '1',
	},
	textbox: {
		position: 'absolute',
		zIndex: '3',
		maxWidth: '60em',
		backgroundColor: 'rgba(0,0,0,.5)',
		margin: '22em 10% 0 5em',
		overflowWrap: 'break-word',
		hyphens: 'auto',
		padding: '1em',
		background: `linear-gradient(to right, rgba(0,0,0,.5) 10%, rgba(255,255,255,0) 99%)`,
	}
});

export function About() {
	return (
		<div className={css(styles.About)}>
			<div className={css(styles.image)} />
			<div className={css(styles.textbox)}>
				<div>I am a graduate of Holberton School Tulsa's Full-Stack Web Development program where I developed my foundations in multiple programming languages and tools. I am a creative, out of the box thinker with strong skills in team based communication and a passion for creating new things.</div>
			</div>
		</div>
	)
}