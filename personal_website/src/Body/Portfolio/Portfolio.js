import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import DnDCC from '../../assets/DnDCC.jpg';
import AirBnB from '../../assets/AirBnB.jpg';
import JoP from '../../assets/JoP.jpg';

const styles = StyleSheet.create({
	Portfolio: {
		display: 'flex',
		color: 'white',
		// justifyContent: 'center',
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
		margin: '5em',
		alignSelf: 'center',
		'@media (min-width: 700px)': {
			margin: '3em'
		}
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
		'@media (min-width: 1500px)': {
			width: '1px',
			height: '10em'
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
		marginTop: '-10em',
		overflowWrap: 'break-word',
		hyphens: 'auto',
		padding: '1em',
		textAlign: 'center'
	},
	gitLink: {
		marginBottom: '2em',
		cursor: 'pointer'
	}
});

export function Portfolio() {
	return (
		<div className={css(styles.Portfolio)}>
			<div className={css(styles.headerSpacer)}></div>
			<div className={css(styles.projectSection)}>
				<div className={css(styles.projectContainer)}>
					<div className={css(styles.projectImage)}>
						<img src={DnDCC} className={css(styles.image)} />
					</div>
					<div className={css(styles.projectDescription)}>
						This is some sample text about the project. Lorem ipsum
						solor blahmet. This is some sample text about the project. 
						Lorem ipsum solor blahmet.
					</div>
					<div className={css(styles.gitLink)}>View on Github</div>
				</div>
				<div className={css(styles.separator)}></div>
				<div className={css(styles.projectContainer)}>
					<div className={css(styles.projectImage)}>
						<img src={JoP} className={css(styles.image)} />
					</div>
					<div className={css(styles.projectDescription)}>
						This is some sample text about the project. Lorem ipsum
						solor blahmet. This is some sample text about the project. 
						Lorem ipsum solor blahmet.
					</div>
					<div className={css(styles.gitLink)}>View on Github</div>
				</div>
				<div className={css(styles.separator)}></div>
				<div className={css(styles.projectContainer)}>
					<div className={css(styles.projectImage)}>
						<img src={AirBnB} className={css(styles.image)} />
					</div>
					<div className={css(styles.projectDescription)}>
						This is some sample text about the project. Lorem ipsum
						solor blahmet. This is some sample text about the project. 
						Lorem ipsum solor blahmet.
					</div>
					<div className={css(styles.gitLink)}>View on Github</div>
				</div>
			</div>
		</div>
	)
}