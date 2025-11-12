export function formatDate(isoString) {
  const date = new Date(isoString);

  const options = {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return date.toLocaleString("en-US", options).replace(",", "");
}
