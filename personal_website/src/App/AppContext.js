import { createContext } from "react";

const current_content = 'about';

const AppContext = createContext({
	current_content
});

export default AppContext;