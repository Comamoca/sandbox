const plugin_file = "./plugin.js";

const plug = await import(plugin_file);

const layout = plug.layout;
console.log(`layout in ${plugin_file} is ${layout}`);

// プラグイン実行
plug.default();
