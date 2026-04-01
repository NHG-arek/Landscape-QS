export function calculateDuration(
  totalHours: number,
  teamSize: number,
  hoursPerDay: number,
): { days: number; weeks: number } {
  if (teamSize <= 0 || hoursPerDay <= 0) return { days: 0, weeks: 0 };
  const days = Math.ceil(totalHours / (teamSize * hoursPerDay));
  const weeks = Math.ceil(days / 5);
  return { days, weeks };
}
