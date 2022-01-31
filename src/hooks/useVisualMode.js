import { useState } from "react";

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //This saves the mode history & set the new mode
  //This allows the back function to remember the last mode
  const transition = (newMode, replace = false) => {

    //   if (replace) {
    //     history.pop();
    //   }
    //   history.push(newMode);
    //   setMode(newMode);
    //   setHistory(history);
    // }

    if (replace) {
      setHistory((prev) => [...prev.slice(0, -1), newMode]);
    }
    else {
      setHistory((prev) => [...prev, newMode]);
    }

    setMode(newMode);
  }


  const back = () => {

    if (history.length > 1) {
      history.pop();
      setHistory(history);
      setMode(history[history.length - 1]);
    } else {
      setMode(mode);
    }
  }

  return { mode, transition, back };
}