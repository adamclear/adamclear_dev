import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import resume from '../../assets/Resume.jpg';
import resumeSmall from '../../assets/ResumeSmall.jpg'

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
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		backgroundImage: `url(${resumeSmall})`,
		margin: '5rem 0',
		height: '32.45em',
		width: '25.1em',
	},
	downloadPDF: {
		width: '10rem',
		textAlign: 'center'
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
			<img className={css(styles.resume)}></img>
			<div className={css(styles.downloadPDF)}
							onClick={downloadPDF}>Download PDF</div>
		</div>
	)
}