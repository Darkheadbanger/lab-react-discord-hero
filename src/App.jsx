// import { useState } from 'react'
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import discordBackground from "./assets/discord-background.png";
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  let title = "Imagine A Place...".toUpperCase();
  let information = `...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
`;
  let toOsDownload = ["Mac", "Windows", "Linux"];
  let softwareToOpen = "Discord";
  let whereToOpenSoftware = "Browser";
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

          <div className="buttons">
            <button type="button" className="downloadDiscordMac">
              Download For {toOsDownload[0]}
            </button>
            <button type="button" className="browserDiscord">
              Open {softwareToOpen} in your {whereToOpenSoftware}
            </button>
          </div>

          <div className="image-hero">
            <img
              src={discordBackground}
              alt="A background image showing 5 people sitting down and talking to each other, with a chair shaped like a video game controller and another shaped like a portable console, and one of these 5 people is drinking a beverage and looking outward"
              className="absolute-image-hero"
            />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
