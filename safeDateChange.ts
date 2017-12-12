/**
 * Verifies and corrects Dates where the month could accedently skipped into the
 * next month because the date is out of bounds by the month changed to.
 *
 * ```ts
 * const date = new Date(2017, 0, 31);
 * newDate = new Date(date);
 * newDate.setMonth(1);
 *
 * // Normally you would expect "newDate" month to be February, but since the date
 * // of the previous date was 31 and february max date is 28 (or 29), the actual
 * // "newDate" is "Match 3rd 2017". Using this function keeps it at "February 28 2017"
 *
 * safeDateChange(date, newDate);
 *
 * newDate; // <- "February 28 2017"
 * ```
 */
export default function safeDateChange(from: Date, to: Date) {
  const d = from.getDate();

  // Compensate for going from the 31st in a month
  // into a month that doesn't have 31 days
  if(d > 28 && to.getDate() !== d) {
    to.setDate(0);
  }

  return to;
}
