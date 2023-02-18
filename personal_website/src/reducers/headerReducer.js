import { CHANGE_CONTENT } from "../actions/headerActionTypes";
import { Map } from 'immutable';

export const initialState = Map({
	current_content: 'about'
});

export function headerReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_CONTENT:
			console.log(state)
			return state.set('current_content', action.current_content);
		default:
			return state;
	};
};