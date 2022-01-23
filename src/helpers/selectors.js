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
  result["students"] = interview.student;
  result["interviewer"] = interviewers[interview.interviewer];

  return result;
}

export function getInterviewersForDay(state, day) {
  const days = state.days;
  const interviewers = state.interviewers;
  const result = [];

  for (let weekday of days) {
    if (weekday.name === day) {
      for (let interviewersDay of weekday.interviewers) {
        result.push(interviewers[interviewersDay]);
      }
    }
  }
  return result;
}