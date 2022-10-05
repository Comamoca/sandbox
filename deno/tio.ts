import tio from 'https://deno.land/x/tio@v3.0.2/mod.ts'

tio.defaultTimeout = 60000;
// for (const item of tio.languages) {
//   console.log(item)
// }
// Evaluate a code (Node.js is the default language).
// let response = await tio('console.log("Hello, World!");')
//
// console.log(response)
// response = await tio('for (;;);')
//
// console.log(response)
// Evaluate a code from another programming language (e.g. Python).
// response = await tio('print("Hello, World!")', 'python3')

// const code = 'prinrln!("今日ラーメン食べた？");'
const code = `
fn main() {
    // 世界よ、こんにちは
    println!("Hello, world!");
}
`
// const code = 'prinrln!("今日ラーメン食べた？");'

const response = await tio(code, 'rust')

console.log(response)
