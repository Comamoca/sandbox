// append text to file
export async function appendText(path: string, text: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  await Deno.writeFile(path, data, { append: true });
}
