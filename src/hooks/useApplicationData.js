import axios from "axios";
import { useEffect, useReducer } from "react";
import searchDayByAppointment from "helpers/selectors";

const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";
const DELETE_INTERVIEW = "DELETE_INTERVIEW";
const SPOT_AVAILABLE = "SPOT_AVAILABLE";

function reducer(state, action) {
  switch (action.type) {
    case SET_DAY:
      return {
        ...state,
        day: action.day
      }

    case SET_APPLICATION_DATA:
      console.log(`Here`, action)
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers
      }

    case SET_INTERVIEW: {
      return {
        ...state,
        appointments: action.appointments
      }
    }

    case DELETE_INTERVIEW: {
      return {
        ...state,
        appointments: action.appointments
      }
    }

    case SPOT_AVAILABLE:
      const idDay = searchDayByAppointment(action.id, state);
      const idAppointment = state.days[idDay].appointments;
      let availability = 0;

      for (let i = 0; i < idAppointment.length; i++) {
        if (!state.appointments[idAppointment[i]].interview) {
          availability += 1;
        }
      }

      return {
        ...state,
        //1st parameter should be the day, 2 parameter - current index
        days: state.days.map((id, appointmentDay) => {
          // days: state.days.map((id) => {
          if (appointmentDay !== idDay) {
            return id;
          }
          else {
            return {
              ...id,
              spots: availability
            }
          }
        })
      }

    default:
      throw new Error(
        `Action not supoprted: ${action.type}`
      );
  }
}

export default function useApplicationData(initial) {

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const setDay = (day) => {
    dispatch({ type: SET_DAY, day });
  }


  useEffect(() => {
    const days = axios.get("/api/days");
    const appointments = axios.get("/api/appointments");//s
    const interviewers = axios.get("/api/interviewers");//s

    Promise.all([
      Promise.resolve(days),
      Promise.resolve(appointments),
      Promise.resolve(interviewers)

    ]).then((all) => {

      dispatch({
        type: SET_APPLICATION_DATA,
        days: all[0].data, appointments: all[1].data,
        interviewers: all[2].data
      })
    })
  }, [])


  function bookInterview(id, interview) {
    //console.log(id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        dispatch({ type: SET_INTERVIEW, appointments })
        dispatch({ type: SPOT_AVAILABLE, id: id })
      })
  }


  function deleteInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        dispatch({ type: DELETE_INTERVIEW, appointments })
        dispatch({ type: SPOT_AVAILABLE, id: id })
      })
  }

  return {
    state, setDay, bookInterview, deleteInterview
  }
};