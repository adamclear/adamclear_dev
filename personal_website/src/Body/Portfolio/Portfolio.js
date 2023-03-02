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
		marginBottom: '10em'
	},
	separator: {
		height: '1px',
		width: '10em',
		backgroundColor: 'white',
		alignSelf: 'center',
		margin: '3em 0',
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
		width: '15em',
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
		fontFamily: 'Sans-Serif',
		fontSize: '30px',
		marginBottom: '20px'
	},
	projectTech: {
		width: '15em',
		marginBottom: '2em',
		marginTop: '-2em',
		overflowWrap: 'break-word',
		hyphens: 'auto',
		padding: '1em',
		textAlign: 'left',
		fontFamily: 'monospace'
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
					<a className={css(styles.gitLink)}
							 href="https://github.com/adamclear/DnD_CC"
							 target="_blank">
						<div className={css(styles.projectImage)}>
						<img src={DnDCC} className={css(styles.image)} />
					</div>
					</a>
					<div className={css(styles.projectDescription)}>
						A Dungeons & Dragons 5th Edition character creator. Allows a user to 
						build and level a character. A third-party API is leveraged to produce 
						a character sheet. Users can create an account & save/access characters.
					</div>
					<div className={css(styles.projectTech)}>
						Tech: Bcrypt, Flask, Jinja, Python, SQLAlchemy, SQLite
					</div>
				</div>
				<div className={css(styles.separator)}></div>
				<div className={css(styles.projectContainer)}>
					<h3 className={css(styles.projectTitle)}>
						The Joy of Painting API
					</h3>
					<a className={css(styles.gitLink)}
							 href="https://github.com/adamclear/holbertonschool-the-joy-of-painting-api"
							 target="_blank">
						<div className={css(styles.projectImage)}>
							<img src={JoP} className={css(styles.image)} />
						</div>
					</a>
					<div className={css(styles.projectDescription)}>
						A single page application that utilizes backend TSV & CSV files to 
						generate a database and API to fetch and serve Bob Ross episodes 
						based on API query criteria.
					</div>
					<div className={css(styles.projectTech)}>
						Tech: Bcrypt, Flask, Jinja, Pandas, Python, SQLAlchemy, SQLite
					</div>
				</div>
				<div className={css(styles.separator)}></div>
				<div className={css(styles.projectContainer)}>
					<h3 className={css(styles.projectTitle)}>
						AirBnB Clone
					</h3>
					<a className={css(styles.gitLink)}
							 href="https://github.com/adamclear/AirBnB_clone_v4"
							 target="_blank">
						<div className={css(styles.projectImage)}>
							<img src={AirBnB} className={css(styles.image)} />
						</div>
					</a>
					<div className={css(styles.projectDescription)}>
						A basic clone of the AirBnB interface front-end and a back-end with 
						a custom console, database, & framework. Completed over the course 
						of several projects where new codebases were forked and worked from.
					</div>
					<div className={css(styles.projectTech)}>
						Tech: Flask, Jinja, MySQL, Python, SQLAlchemy
					</div>
				</div>
			</div>
		</div>
	)
}