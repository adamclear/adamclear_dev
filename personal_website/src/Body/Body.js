import { About } from './About/About';
import { css, StyleSheet } from 'aphrodite';
import { Portfolio } from './Portfolio/Portfolio'
import React from 'react';
import { connect } from 'react-redux';
import { Resume } from './Resume/Resume';


const fadeIn = {
	'0%': { opacity: 0 },
	'100%': { opacity: 1 }
}

// const styles = StyleSheet.create({
// 	Portfolio: {
// 		display: 'block',
// 		animation: {
// 			animationDuration: '5s',
// 			animationName: [fadeIn]
// 		}
// 	}
// });

const styles = StyleSheet.create({
	body: {
		display: 'block'
	}
});

function Body({ current_content }) {
	let component
	if (current_content === 'about') {
		component = <About />
	} else if (current_content === 'resume') {
		component = <Resume />
	} else if (current_content === 'portfolio') {
		component = <Portfolio />
	}
	return (
		<React.Fragment>
			<div className={css(styles.body)}>
				{component}
			</div>
		</React.Fragment>
	);
};

export const mapStateToProps = (state) => {
	return {
		current_content: state.header.get('current_content')
	};
};

export const ReduxBody = connect(mapStateToProps)(Body);