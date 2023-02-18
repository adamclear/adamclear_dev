import { CHANGE_CONTENT } from "../actions/headerActionTypes";
import { Map } from 'immutable';

export const initialState = Map({
	current_content: 'about'
});

export function headerReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_CONTENT:
			state = state.toJS()
			state.current_content = action.current_content
			state = Map(state)
			return state;
		default:
			return state;
	};
};