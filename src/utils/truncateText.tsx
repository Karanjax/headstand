export function truncateText(text: string, length: number = 100): string {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
}
