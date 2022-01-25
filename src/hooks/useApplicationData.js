import axios from "axios";
import React, { useEffect, useState } from "react";
import searchDayByAppointment from "helpers/selectors";



export default function useApplicationData(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointnments: {},
    interviewers: {}
  })

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    const days = axios.get("/api/days");
    const appointments = axios.get("/api/appointments");//s
    const interviewers = axios.get("/api/interviewers");//s

    Promise.all([
      Promise.resolve(days),
      Promise.resolve(appointments),
      Promise.resolve(interviewers)

    ]).then((all) => {

      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
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
        console.log(interview);
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
        console.log(id);
      })
  }

  return {
    state, setDay, bookInterview, deleteInterview
  };

};