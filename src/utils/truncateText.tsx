export function truncateText(text, length = 100) {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
}