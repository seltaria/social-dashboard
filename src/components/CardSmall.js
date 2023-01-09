import React from "react";

export function CardSmall(props) {
  return (
    <a href="#" className={`card-sm ${props.lightMode ? "light-mode" : ""}`}>
      <div className={`card-sm__name ${props.lightMode ? "light-mode" : ""}`}>{props.title}</div>
      <img src={`/images/icon-${props.socialMedia}.svg`} alt="" />
      <div className="card-sm__count">{props.count < 10000 ? props.count : `${Math.floor(props.count / 1000)}K`}</div>
      <div className="card-sm__count-today" style={{ color: props.pers < 0 ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)" }}>
        <img src={`/images/icon-${props.pers < 0 ? "down" : "up"}.svg`} alt="" /> {Math.abs(props.pers)}%</div>
    </a>
  )
}