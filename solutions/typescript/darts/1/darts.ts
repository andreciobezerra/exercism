enum initialPoint {
  X = 0,
  Y = 0,
}

export function score(x: number, y: number): number {
  const distanceForCenter = calculateDistance(x, y);
  const result: [boolean, number] | undefined = [
    [distanceForCenter <= 1, 10],
    [distanceForCenter <= 5, 5],
    [distanceForCenter <= 10, 1],
  ].find((condition) => !!condition.at(0)) as [boolean, number];

  return (result?.at(1) as number) ?? 0;
}

function calculateDistance(x: number, y: number): number {
  return Math.sqrt(
    Math.pow(x - initialPoint.X, 2) + Math.pow(y - initialPoint.Y, 2),
  );
}
