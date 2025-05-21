const formatTime = (seconds) => {
  const joinWithAnd = (arr) => {
    if (arr.length === 0) return "";
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return arr.join(" and ");
    return arr.slice(0, -1).join(", ") + " and " + arr[arr.length - 1];
  };

  if (seconds < 1) return `${seconds} second`;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds / 60) % 60);
  const s = seconds % 60;
  const parts = [];
  if (h > 0) parts.push(`${h} ${h === 1 ? "hour" : "hours"}`);
  if (m > 0) parts.push(`${m} ${m === 1 ? "minute" : "minutes"}`);
  if (s > 0 || parts.length === 0)
    parts.push(`${s} ${s === 1 ? "second" : "seconds"}`);

  return joinWithAnd(parts);
};

console.log(formatTime(50));
