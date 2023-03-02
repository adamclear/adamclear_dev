import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import resume from '../../assets/Resume.jpg';

const styles = StyleSheet.create({
	Resume: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		color: 'white',
	},
	headerSpacer: {
		height: '1px',
		marginBottom: '5em'
	},
	resume: {
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: 'contain',
		// backgroundImage: `url(${resume})`,
		margin: '5rem 0',
		// height: '32.45em',
		// width: '25.1em',
		height: '515px',
		width: '400px',
		cursor: 'pointer',
		'@media (min-width: 700px)': {
			height: '841px',
			width: '650px'
		}
	},
	downloadPDF: {
		// margin: '5rem 0',
		// height: '515px',
		// width: '400px',
	}
});

export function Resume() {
	const downloadPDF = () => {
		fetch('Resume.pdf').then(response => {
			response.blob().then(blob => {
				const resumePDF = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = resumePDF;
				alink.download = "Adam_Clear_Resume.pdf";
				alink.click();
			})
		})
	}
	return (
		<div className={css(styles.Resume)}>
			<div className={css(styles.headerSpacer)}></div>
			<div className={css(styles.downloadPDF)}
							onClick={downloadPDF}>
				<img className={css(styles.resume)}
						 src={resume}></img>
			</div>
		</div>
	)
}