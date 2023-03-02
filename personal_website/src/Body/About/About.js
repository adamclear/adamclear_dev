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
		margin: '25em 10% 0 2em',
		overflowWrap: 'break-word',
		hyphens: 'auto',
		padding: '1em',
		boxShadow: '0 0 1em 1em rgba(0,0,0,.5)',
		'@media (min-width: 1000px)': {
			margin: '30em 10% 0 20em'
		}
	},
	description: {
		// border: '1px solid white',
		// borderRadius: '2%',
		// padding: '0 1em',
		fontFamily: 'monospace',
		'@media (min-width: 1000px)': {
			fontSize: '20px'
		}
	},
	greeting: {
		fontFamily: 'monospace',
		fontSize: '20px'
	},
	name: {
		fontFamily: 'Sans-Serif',
		fontSize: '50px',
		marginBottom: '-20px'
	},
	title: {
		fontFamily: 'Sans-Serif'
	}
});

export function About() {
	return (
		<div className={css(styles.About)}>
			<div className={css(styles.image)} />
			<div className={css(styles.textbox)}>
				<div className={css(styles.greeting)}>Hello there! My name is</div>
				<h1 className={css(styles.name)}>Adam Clear.</h1>
				<h1 className={css(styles.title)}>I am a Full-Stack Web Developer.</h1>
				<div className={css(styles.description)}>
					<p>
					I am a graduate of Holberton School Tulsa's Full-Stack Web Development
					program where I developed my foundations in multiple programming
					languages and tools.
					<br/>
					<br/>
					I've also attended Tulsa Community College where I studied studio arts
					and general world history. I eventually graduated with Associate's
					Degrees in each of those subjects.
					<br />
					<br />
					I enjoy painting, drawing, sculpting, cooking, writing, coding, etc.
					Anything that allows me to express myself creatively and solve problems
					along the way. I am a creative, out of the box thinker with strong
					skills in team based communication.
					<br/>
					<br/>
					I feel that creative expression is necessary to a fulfilling existence
					and that everyone should have an outlet for creativity, regardless of
					whether they feel they are "talented" or "creative" people. Talent and
					creativity are cultivated through practice and curiosity. I believe that
					anyone that is free from the tribulations of meeting their basic needs
					will find some way to express themselves, and that the world is better
					when people are allowed to focus on this expression.
					</p>
				</div>
			</div>
		</div>
	)
}