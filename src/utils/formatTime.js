export const calculateTotalHours = (timeDateArray) => {
  let total = 0;
  timeDateArray.forEach((day) => {
    const [startHour, startMinute] = day.startTime.split(':');
    const [endHour, endMinute] = day.endTime.split(':');
    const start = new Date(0, 0, 0, startHour, startMinute);
    const end = new Date(0, 0, 0, endHour, endMinute);
    const diff = (end - start) / 1000 / 60 / 60; // difference in hours
    total += diff;
  });
  return total
};