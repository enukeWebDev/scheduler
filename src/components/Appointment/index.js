import React from "react";
import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";

import useVisualMode from "hooks/useVisualMode";



const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  //Jan. 24 - below

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => {
        console.log(error);
      })

  }

  function cancelInterview() {
    transition(DELETE, true);
    props.deleteInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => {
        console.log(error);
      })
  }

  function confirmCancelInterview() {
    transition(CONFIRM);
  }

  //Jan. 24 - above

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && (
        <Empty onAdd={() => transition(CREATE)} />)}


      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
        />
      )}

      {mode === SAVING && (
        <Status
          message="Saving"
        />
      )}

      {mode === DELETE && (
        <Status
          message="Deleting"
        />
      )}

      {mode === CONFIRM && (
        <Confirm
          onCancel={() => back()}
          onConfirm={cancelInterview}
        />
      )}
      {/*props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />*/}

    </article>
  )
}