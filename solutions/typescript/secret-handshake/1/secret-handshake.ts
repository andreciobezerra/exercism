const msgs = new Map([
  [0, "wink"],
  [1, "double blink"],
  [2, "close your eyes"],
  [3, "jump"]
]);


export function commands(n: number): string[] {
  let binary = n.toString(2);
  const reverse = Boolean(Math.trunc(Number(binary) / 10_000));

  const result = binary
    .split("")
    .reverse()
    .map((step, index) => step === "1" ? msgs.get(index) : undefined)
    .filter(Boolean);

  return reverse
    ? (result as string[]).reverse()
    : (result as string[]);
}
