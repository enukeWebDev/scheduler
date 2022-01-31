/**
 * Get an appointment for the day
 * @param {*} state 
 * @param {*} day 
 * @returns 
 */
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

/**
 * Attaches an interviewer object to the interview
 * @param {*} state 
 * @param {*} interview 
 * @returns 
 */
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

/**
 * Get an interview for the day
 * @param {*} state 
 * @param {*} day 
 * @returns 
 */
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

/**
 * Function to find day by appointment
 * @param {*} id 
 * @param {*} state 
 * @returns 
 */
export default function findDayByAppointment(id, state) {
  for (let i = 0; i < state.days.length; i++) {
    for (let prop of state.days[i].appointments) {
      if (id === prop) {
        return i;
      }
    }
  }
}
