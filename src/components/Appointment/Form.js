import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = () => {
    setStudent("");
    setInterviewer(null);
    setError("");
  }

  const cancel = () => {
    reset();
    props.onCancel();
  }

  function saveErr() {
    if (student === "") {
      setError("Student name cannot be blank")
      return;
    }

    if (interviewer === null) {
      setError("Please select an interviewer.");
      return;
    }
    props.onSave(student, interviewer);
    setError("");
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault}>

          <input
            value={student}
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}

            data-testid="student-name-input"
          />
        </form>

        <section className="appointment__validation">
          {error}
        </section>

        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
          state={props.state}
        />

      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => cancel(student)}>Cancel</Button>
          <Button confirm onClick={saveErr}>Save</Button>
        </section>
      </section>
    </main>
  )
}