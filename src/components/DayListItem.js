import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  // const spotsRemaining = (spots) => {
  //   if (spots === 0) {
  //     return "Sorry - no spots left.";
  //   } else if (spots === 1) {
  //     return "There is 1 more spot left.";
  //   } else {
  //     return `There is/are ${spots} spot/s remaining.`;
  //   }
  // }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}