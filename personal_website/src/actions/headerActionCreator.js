import { CHANGE_CONTENT } from "./headerActionTypes";
import { bindActionCreators } from "redux";

export function changeContent(content) {
	return {
		type: CHANGE_CONTENT,
		current_content: content
	};
};

export const headerActions = {
	changeContent
}

export const boundUIActions = (dispatch) => bindActionCreators(headerActions, dispatch);