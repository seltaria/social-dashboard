import React from "react";

export function CardBig(props) {

  /* Styles for color "top border" of blocks depending on the name of the social media of this block: */
  let styles = {};
  switch (props.socialMedia) {
    case "facebook":
      styles = { background: "hsl(208, 92%, 53%)" };
      break;
    case "twitter":
      styles = { background: "hsl(203, 89%, 53%)" };
      break;
    case "instagram":
      styles = { background: "linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%)" };
      break;
    case "youtube":
      styles = { background: "hsl(348, 97%, 39%)" };
      break;
    default:
      styles = { background: "hsl(208, 92%, 53%)" };
  }

  return (
    <a href="#" className={`card-big ${props.lightMode ? "light-mode" : ""}`}>
      <div className="gradient" style={styles}></div>
      <div className="card-big__content">
        <a className={`card-big__link ${props.lightMode ? "light-mode" : ""}`} href="#">
          <img className="card-big__link-icon" src={`/images/icon-${props.socialMedia}.svg`} alt="" />
          {props.link}</a>
        <div className="card-big__count">{props.followers < 10000 ? props.followers : `${Math.floor(props.followers / 1000)}K`}</div>
        <span className={`${props.lightMode ? "light-mode" : ""}`}>FOLLOWERS</span>
        <div className="card-big__count-today" style={{ color: props.today < 0 ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)" }}>
          <img src={`/images/icon-${props.today < 0 ? "down" : "up"}.svg`} alt="" /> {Math.abs(props.today)} Today</div>
      </div>
    </a>
  )
}