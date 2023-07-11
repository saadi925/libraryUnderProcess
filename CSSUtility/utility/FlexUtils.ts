export function handleFlexProperty(value: string): number | undefined {
  const numericValue = parseFloat(value);
  if (!isNaN(numericValue)) {
    return numericValue;
  } else {
    return undefined;
  }
}
