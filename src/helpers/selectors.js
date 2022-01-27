export function getAppointmentsForDay(state, day) {
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

export function getInterview(state, interview) {
  const interviewers = state.interviewers;
  const result = {};
  if (!interview) {
    return null;
  }
  result["student"] = interview.student;
  result["interviewer"] = interviewers[interview.interviewer];

  return result;
}

export function getInterviewersForDay(state, day) {
  console.log(state.days)
  const days = state.days;
  const interviewers = state.interviewers;
  const result = [];



  for (let weekday of days) {

    if (weekday.name === day) {
      console.log(`This one`, weekday.interviewers);
      for (let interviewersDay of weekday.interviewers) {
        result.push(interviewers[interviewersDay]);
      }
    }
  }
  return result;
}

//   const found = state.days.find(d => day === d.name);

//   if (state.days.length === 0 || found === undefined) return [];

//   return found.interviewers.map(id => state.interviewers[id]);
// }

export default function searchDayByAppointment(id, state) {
  for (let i = 0; i < state.days.length; i++) {
    for (let prop of state.days[i].appointments) {
      if (id === prop) {
        return i;
      }
    }
  }
}