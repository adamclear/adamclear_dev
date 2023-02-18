import { About } from './About/About';
import { css, StyleSheet } from 'aphrodite';
import { Project1 } from './Project1/Project1';
import { Project2 } from './Project2/Project2';
import { Project3 } from './Project3/Project3';
import React from 'react';
import { connect } from 'react-redux';
import { Resume } from './Resume/Resume';

const styles = StyleSheet.create({
	body: {
		display: 'block'
	}
});

function Body({ current_content }) {
	let component
	switch(current_content) {
		case 'about':
			component = <About />
		case 'resume':
			component = <Resume />
		case 'project1':
			component = <Project1 />
		case 'project2':
			component = <Project2 />
		case 'project3':
			component = <Project3 />
		default:
			component = <About />
	};
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
		current_content: state.current_content
	};
};

export const ReduxBody = connect(mapStateToProps)(Body);