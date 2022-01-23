export function getAppointnmentsForDay(state, day) {
  const days = state.days;
  const appointments = state.appointments;
  const result = [];

  for (let weekday of days) {
    if (weekday.name === day) {
      for (let appointment of weekday.appointments) {
        result.push(appointments[appointment])
      }
    }
  }
  return result;
}