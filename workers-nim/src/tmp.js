import { handler } from "./handler.js"

Bun.serve({
	port: 8000,
	fetch(req) {
		return BadValue()
	}
})
