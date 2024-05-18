function main() {
  const [a, b] = Bun.argv.slice(2);
  console.log(Number(a) + Number(b));
}

main();
