import { useState } from "react";

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //This saves the mode history & set the new mode
  //This allows the back function to remember the last mode
  const transition = (newMode, replace = false) => {

    if (replace) {
      setHistory((prev) => [...prev.slice(0, -1), newMode]);
    } else {
      setHistory((prev) => [...prev, newMode]);
    }
    setMode(newMode);
  }

  //This goes back to the last mode the user in
  //This prevents the user from deleting thr initiial history
  const back = () => {

    if (history.length > 1) {
      history.pop();
      setHistory(history);
      setMode(history[history.length - 1]);
    } else {
      setMode(mode);
    }

    //This will compile with warnings
    // setHistory((prev) => {
    //   if (prev.length === 1) {
    //     return [...prev];
    //   }

    //   const lastMode = [...prev.slice(0, -1)];
    //   setMode(lastMode[lastMode.length - 1]);

    //   return lastMode;
    // })
  }

  return { mode, transition, back };
}