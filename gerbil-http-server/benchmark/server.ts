import { Hono } from "jsr:@hono/hono";

const app = new Hono()

app.get('/', (c) => c.text('hello'))

Deno.serve(app.fetch)
