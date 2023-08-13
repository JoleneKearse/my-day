export default function getDate() {
  const date = new Date()
  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.getMonth()
  const numInMonth = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return {
    hours: `${hours}`,
    time: `${hours}:${minutes}`,
    day: `${day}`,
    date: `${month}, ${numInMonth}`,
    year: `${year}`
  }
}