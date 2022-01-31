import { useState } from "react";

export default function useVisualMode(initial) {


  const [history, setHistory] = useState([initial]);

  /**
   * This saves the mode history & set the new mode
   * This allows the back function to remember the last mode
   * @param {*} newMode 
   * @param {*} replace 
   */
  const transition = (newMode, replace = false) => {

    if (replace) {
      setHistory((prev) => [...prev.slice(0, -1), newMode]);
    } else {
      setHistory((prev) => [...prev, newMode]);
    }
  }

  /**
   * This goes back to the last mode the user in
   * This prevents the user from deleting thr initiial history
   * @returns 
   */
  const back = () => {

    if (history.length < 2) {
      return
    }

    const newHistory = [...history.slice(0, -1)];
    setHistory(newHistory);
  }

  const mode = history[history.length - 1]

  return { mode, transition, back };
}