import React, { useState, useEffect } from "react";

import axios from "axios";

import "components/Application.scss";

import DayList from "components/DayList";

import Appointment from "components/Appointment";

//Jan. 23
const [days, setDays] = useState([]);

useEffect(() => {
  const days = axios.get("/api/days")
  const appointments = axios.get("/api/appointments")
  Promise.all([
    Promise.resolve(days),
    Promise.resolve(appointments)
  ]).then(() => {

  }, [])
  // console.log(day);
  // const days = [
  //   {
  //     id: 1,
  //     name: "Monday",
  //     spots: 2,
  //   },
  //   {
  //     id: 2,
  //     name: "Tuesday",
  //     spots: 5,
  //   },
  //   {
  //     id: 3,
  //     name: "Wednesday",
  //     spots: 0,
  //   },
  // ];

  const appointments = [
    {
      id: 1,
      time: "12pm",
    },
    {
      id: 2,
      time: "1pm",
      interview: {
        student: "Lydia Miller-Jones",
        interviewer: {
          id: 3,
          name: "Sylvia Palmer",
          avatar: "https://i.imgur.com/LpaY82x.png",
        }
      }
    },
    {
      id: 3,
      time: "2pm",
    },
    {
      id: 4,
      time: "3pm",
      interview: {
        student: "Archie Andrews",
        interviewer: {
          id: 4,
          name: "Cohana Roy",
          avatar: "https://i.imgur.com/FK8V841.jpg",
        }
      }
    },
    {
      id: 5,
      time: "4pm",
    }
  ];


  export default function Application(props) {

    // const [day, setDay] = useState('Monday');
    // console.log(day);
    // const days = [
    //   {
    //     id: 1,
    //     name: "Monday",
    //     spots: 2,
    //   },
    //   {
    //     id: 2,
    //     name: "Tuesday",
    //     spots: 5,
    //   },
    //   {
    //     id: 3,
    //     name: "Wednesday",
    //     spots: 0,
    //   },
    // ];

    const [day, setDay] = useState("Monday");

    const schedules = appointments.map(appointment => {
      return (
        <Appointment key={appointment.id} {...appointment} />
      )
    })

    return (
      <main className="layout">
        <section className="sidebar">
          <img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
          />
          <hr className="sidebar__separator sidebar--centered" />
          <nav className="sidebar__menu">
            <DayList
              days={state.days}
              day={state.day}
              setDay={setDay}
            />
          </nav>
          {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
          <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          />
        </section>
        <section className="schedule">
          {schedules}
          <Appointment key="last" time="5pm" />
        </section>
      </main>
    );
  }
