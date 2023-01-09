import { nanoid } from "nanoid";
import React from "react";
import { CardBig } from "./components/CardBig";
import { CardSmall } from "./components/CardSmall";
import { data } from "./data";

export function App() {

  /* Save selected mode to the local storage: */
  const localMode = JSON.parse(window.localStorage.getItem('dashboard-mode'));
  /* If user doesn't have saved mode, set dark mode: */
  const [lightMode, setLightMode] = React.useState(localMode ? localMode : false);

  /* Toggle mode by clicking on the toggler and save selected mode to the local storage: */
  function toggleMode() {
    setLightMode(prevMode => !prevMode)
    window.localStorage.setItem('dashboard-mode', JSON.stringify(!lightMode))
  }

  /* Change mode of the body: */
  lightMode ? document.body.classList.add('light-mode') : document.body.classList.remove('light-mode');

  /* Create big card components with data from data.js: */
  const bigCardElements = data.main.map(element =>
    <CardBig
      socialMedia={element.socialMedia}
      link={element.link}
      followers={element.followers}
      today={element.today}
      key={nanoid()}
      lightMode={lightMode}
    />)

  /* Create small card components with data from data.js: */
  const smallCardElements = data.today.map(element =>
    <CardSmall
      title={element.title}
      socialMedia={element.socialMedia}
      count={element.count}
      pers={element.pers}
      key={nanoid()}
      lightMode={lightMode}
    />)

  return (
    <div className="app">
      <header className={`header ${lightMode ? "light-mode" : ""}`}>
        <div className="header__container">
          <div className={`header__text ${lightMode ? "light-mode" : ""}`}>
            <h1 className="app__title">Social Media Dashboard</h1>
            <div className={`app__total ${lightMode ? "light-mode" : ""}`}>Total Followers: 23,004</div>
          </div>
          <div className="app__mode-container">
            <span className="app__mode">Dark Mode</span>
            <div className={`app__mode-toggler ${lightMode ? "light-mode" : ""}`} onClick={toggleMode}>
              <div className="app__mode-toggler-circle"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="card-big__container">
        {bigCardElements}
      </div>
      <h2 className={`card-sm__title ${lightMode ? "light-mode" : ""}`}>Overview - Today</h2>
      <div className="card-sm__container">
        {smallCardElements}
      </div>
    </div>
  );
}
