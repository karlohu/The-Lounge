
import log2 from './photos/simple-logo.png';
import './App.css';

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        media="screen and (min-width: 600px)"
        href="smallScreen.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="style.css" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>The Lounge</title>
      <link rel="icon" type="image/x-icon" href="photos/simple-logo.png" />
      <link
        type="text/css"
        rel="stylesheet"
        href="css/materialize.min.css"
        media="screen,projection"
      />
      <div className="header">
        <div className="logo">
          <a href="index.html">
            <img src={log2} width={100} alt="The Lounge Logo" />
          </a>
        </div>
        <div className="navbar">
          <a href="index.html">Home</a>
          <a href="Login.html" target="_blank">
            Login
          </a>
          <a href="https://discord.gg/wdPQ24UWNh" target="_blank">
            Join
          </a>
          <a
            href="https://www.patreon.com/user?u=17439701&fromConcierge=true"
            target="_blank"
            id="support"
          >
            Donate
          </a>
        </div>
      </div>
      <div>
        <h1 className="title gradient-text">THE LOUNGE</h1>
        <h1 className="sub gradient-text">Discord Community</h1>
      </div>
      <button className="button">
        <a
          href="https://discord.gg/wdPQ24UWNh"
          target="_blank"
          className="button_text"
        >
          Join Now
        </a>
      </button>
      <div className="text">
        <b>
          The Lounge was created to connect you with the most amazing, widespread
          community and expand your skills. Don't forget to have fun in the process
          :)
        </b>
      </div>
      <footer className="footer">
        <p>Copyright © 2024 The Lounge. All Rights Reserved.</p>
      </footer>
    </>

  );
}

export default App;
