import { handler } from "./handler";

export default {
	async fetch(request, env, ctx) {
		return handler(request)
	},
};
