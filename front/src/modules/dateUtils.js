const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const add0Str = i => (i<10) ? `0${i}` : i.toString()

export default function (datetime) {
  if(!datetime instanceof Date)
    throw new Error('dateUtils module accept only Date object as a parameter')

  return {
    day: add0Str(datetime.getUTCDate()),
    month: add0Str(datetime.getUTCMonth() + 1),
    year: datetime.getUTCFullYear(),
    monthName: monthNames[datetime.getUTCMonth()],
    referenceDate: datetime
  }
}