import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{
          borderRadius: '100%'
        }} src={"https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118507030_1169825093411955_6547663037328192201_o.jpg?_nc_cat=109&_nc_sid=a26aad&_nc_eui2=AeFwvkHJSwUYUjJkqws9ssXozeZykshgfcDN5nKSyGB9wBiY9jxhOfLDefHFo6lf0pzcH_A2F2sF3O3m3ZAhUKyf&_nc_ohc=oGwHyNI6mZcAX8vCsIo&_nc_ht=scontent.fmid3-1.fna&oh=26f4fc7d036e46fe9b5eab4c7371d75b&oe=5F6CA89B"} className="App-logo" alt="logo" />
        <p>
          Hey chad! How are you? Just making your art spin.
        </p>
        <a
          className="App-link"
          href="www.carlosznava.com"
        >
          Made by Carlos Z.
        </a>
      </header>
    </div>
  );
}

export default App;
