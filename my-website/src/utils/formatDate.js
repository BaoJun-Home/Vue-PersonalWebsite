export default function formatDate(timestamp, showTime = false) {
  const date = new Date(+timestamp);
  const formatYear = date.getFullYear().toString().padStart(4, "0");
  const formatMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const formatDay = date.getDate().toString().padStart(2, "0");
  let finalDate = `${formatYear}-${formatMonth}-${formatDay}`;

  if (showTime) {
    const formatHour = date.getHours().toString().padStart(2, "0");
    const formatMinute = date.getMinutes().toString().padStart(2, "0");
    const formatsecond = date.getSeconds().toString().padStart(2, "0");
    finalDate += ` ${formatHour}:${formatMinute}:${formatsecond}`;
  }

  return finalDate;
}
