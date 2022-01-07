import { userInitializer } from "~/Functions/Helpers/userInitializer";
import { initialContact } from "~/Variables/Constants/Initials/InitialValues/initialValues";

const otherInitialState = {
	welcome: { message: "" },
	onlineStatusCondition: !window.navigator.onLine,
	status: window.navigator.onLine,
};

const userInitialState = {
	...userInitializer(),
	loading: false,
};

const globalInitialState = {
	viewMode: "signIn",
	backdropState: { open: true, progressColor: "inherit", color: "#ff" },
	appDrawerState: {
		anchor: { top: false, left: false, bottom: false, right: false },
		currentAnchor: "left",
	},
	dialogState: {
		contacts: {
			open: false,
		},
		addContact: {
			open: false,
		},
	},
};

const errorInitialState = {
	error: "",
};

const tempInitialState = {
	messages: [
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },

		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },

		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },

		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },

		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{ text: "HI!!!!!!!!!!!!!!!!!!", messageID: "" },
		{
			text: "HI!!!!!!!sdasdas!!!!!!!!!!!",
			messageID: "",
			senderID: "mHy-1dpYKV9XYnQuw1iudFVAh-dvamFjzcQ",
		},
	],
	messageInputText: "",
	contact: initialContact,
};

const INITIAL_STATE = {
	other: otherInitialState,
	user: userInitialState,
	global: globalInitialState,
	error: errorInitialState,
	temp: tempInitialState,
};

const initialState = () => INITIAL_STATE;

export {
	errorInitialState,
	globalInitialState,
	INITIAL_STATE,
	initialState,
	otherInitialState,
	userInitialState,
	tempInitialState,
};
