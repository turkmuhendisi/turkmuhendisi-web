export function parseDisplayDate(date: string): Date | null {
  const trParts = date.split("-");
  if (trParts.length === 3) {
    const [day, month, year] = trParts.map(Number);
    if (day && month && year) {
      return new Date(year, month - 1, day);
    }
  }

  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? null : new Date(parsed);
}

export function toIsoDate(date: string): string | undefined {
  const parsed = parseDisplayDate(date);
  return parsed?.toISOString();
}
