import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import DnDCC from '../../assets/DnDCC.jpg';
import AirBnB from '../../assets/AirBnB.jpg';
import JoP from '../../assets/JoP.jpg';

const styles = StyleSheet.create({
	Portfolio: {
		display: 'flex',
		color: 'white',
		flexDirection: 'column',
		height: '100%'
	},
	projectSection: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		'@media (min-width: 1500px)': {
			flexDirection: 'row',
			alignSelf: 'center',
			margin: '5em 0'
		}
	},
	projectContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	projectImage: {
		height: '333px',
		width: '350px',
		backgroundColor: 'white',
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
		alignSelf: 'center',
		marginBottom: '3em',
		'@media (min-width: 1500px)': {
			width: '1px',
			height: '10em',
			margin: '0 5em'
		}
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	},
	projectDescription: {
		width: '10em',
		marginBottom: '2em',
		marginTop: '-5em',
		overflowWrap: 'break-word',
		hyphens: 'auto',
		padding: '1em',
		textAlign: 'left',
		fontFamily: 'monospace'
	},
	gitLink: {
		marginBottom: '2em',
		cursor: 'pointer',
		':link': {
			textDecoration: 'none'
		},
		':visited': {
			color: 'white',
			textDecoration: 'none'
		},
		':hover': {
			textDecoration: 'none'
		},
		':active': {
			textDecoration: 'none'
		},
	},
	projectTitle: {
		margin: '2em 0',
		fontFamily: 'Sans-Serif'
	}
});

export function Portfolio() {
	return (
		<div className={css(styles.Portfolio)}>
			<div className={css(styles.headerSpacer)}></div>
			<div className={css(styles.projectSection)}>
				<div className={css(styles.projectContainer)}>
					<h3 className={css(styles.projectTitle)}>
						HolB&D Character Creator
					</h3>
					<div className={css(styles.projectImage)}>
						<img src={DnDCC} className={css(styles.image)} />
					</div>
					<div className={css(styles.projectDescription)}>
						This is some sample text about the project. Lorem ipsum
						solor blahmet. This is some sample text about the project. 
						Lorem ipsum solor blahmet.
					</div>
					<a className={css(styles.gitLink)}
							 href="https://github.com/adamclear/DnD_CC"
							 target="_blank">
							View on Github
					</a>
				</div>
				<div className={css(styles.separator)}></div>
				<div className={css(styles.projectContainer)}>
					<h3 className={css(styles.projectTitle)}>
						The Joy of Painting API
					</h3>
					<div className={css(styles.projectImage)}>
						<img src={JoP} className={css(styles.image)} />
					</div>
					<div className={css(styles.projectDescription)}>
						This is some sample text about the project. Lorem ipsum
						solor blahmet. This is some sample text about the project. 
						Lorem ipsum solor blahmet.
					</div>
					<a className={css(styles.gitLink)}
							 href="https://github.com/adamclear/holbertonschool-the-joy-of-painting-api"
							 target="_blank">
							View on Github
					</a>
				</div>
				<div className={css(styles.separator)}></div>
				<div className={css(styles.projectContainer)}>
					<h3 className={css(styles.projectTitle)}>
						AirBnB Clone
					</h3>
					<div className={css(styles.projectImage)}>
						<img src={AirBnB} className={css(styles.image)} />
					</div>
					<div className={css(styles.projectDescription)}>
						This is some sample text about the project. Lorem ipsum
						solor blahmet. This is some sample text about the project. 
						Lorem ipsum solor blahmet.
					</div>
					<a className={css(styles.gitLink)}
							 href="https://github.com/adamclear/AirBnB_clone_v4"
							 target="_blank">
							View on Github
					</a>
				</div>
			</div>
		</div>
	)
}