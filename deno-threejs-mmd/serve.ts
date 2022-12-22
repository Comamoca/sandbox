import { app, get } from 'https://denopkg.com/syumai/dinatra/mod.ts';
const { cwd, open } = Deno;

const currentDir = cwd();
const htmlPath = `${currentDir}/index.html`;

app(get('/', async () => await open(htmlPath)));
