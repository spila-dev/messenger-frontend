const baseRoute = {
	properties: {
		description: "",
		route: "/chat/private",
	},
	info: {
		version: "1.0.0",
	},
};

const getAllChats = {
	properties: {
		description: "Use for Start new chat",
		method: "get",
		route: "/get/all/chats",
	},
	info: {
		version: "1.0.0",
	},
};

const getMessages = {
	properties: {
		description: "Use for get all messages of specific chat",
		method: "post",
		route: "/get/messages",
	},
	info: {
		version: "1.0.0",
	},
};

const startChat = {
	properties: {
		description: "Use for Start new chat",
		method: "post",
		route: "/start/chat",
	},
	info: {
		version: "1.0.0",
	},
};

const sendMessage = {
	properties: {
		description: "Use for send private messages",
		method: "post",
		route: "/send/message",
	},
	info: {
		version: "1.0.0",
	},
};

const error = {
	properties: {
		description: "Use for get all auth errors",
		method: "get",
		route: "/error",
	},
	info: {
		version: "1.0.0",
	},
};

const template = {
	properties: {
		description: "Use for get all user properties and value structure",
		method: "get",
		route: "/template",
	},
	info: {
		version: "1.0.0",
	},
};

const privateChatRouteTemplate = {
	info: {
		version: "1.0.0",
	},

	baseRoute,
	getAllChats,
	getMessages,
	startChat,
	sendMessage,
	error,
	template,
};

export {
	privateChatRouteTemplate,
	baseRoute,
	getAllChats,
	getMessages,
	startChat,
	sendMessage,
	error,
	template,
};