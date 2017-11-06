// TODO: Make this utile

export default function monthCompensate(currDate, newDate) {
  const d = currDate.getDate();
  // Compensate for going from the 31st in a month
  // into a month that doesn't have 31 days
  if(d > 28 && newDate.getDate() !== d) {
    newDate.setDate(0);
  }

  return newDate;
}
