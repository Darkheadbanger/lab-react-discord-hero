// import { useState } from 'react'
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  let title = "Imagine A Place...".toUpperCase();
  let information = `...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
`;

  return (
    <>
      <div className="App">
        <header>
          <nav className="nav-discord">
            <img src={discordLogo} alt="The logo of Discord" />
            <img src={menuIcon} alt="The icon of a menu" />
          </nav>

          <div className="info">
            <h1>{title}</h1>
            <p>{information}</p>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
