export function now() {
  const date = new Date();

  return [
    [
      date.getFullYear(),
      date.getMonth(),
      date.getDay(),
    ],
    [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ],
  ];
}
