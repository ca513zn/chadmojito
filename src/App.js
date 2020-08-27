import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const images = [
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118374523_1169825356745262_5155886012404981388_o.jpg?_nc_cat=106&_nc_sid=a26aad&_nc_eui2=AeETr3JjWQmzpm3YFYuahpDkcuUi15448cdy5SLXnjjxx65bkl-2StR10ycyRMWAZALmYpMJVO-8ekv4VvrWxM34&_nc_ohc=3U5dn1Jnd1QAX86eufg&_nc_oc=AQmS5YBkM3gISj0rjnfIc77hmGsJNe9pi5xnKQxcB3xECst4Uf8VH4qG1YXDnziAH3owKppHs9Hx4A0MLULPyGAy&_nc_ht=scontent.fmid3-1.fna&oh=083faf5b3a648a6d15951913d9b94ddf&oe=5F6D4868",

  ];
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            marginTop: '16px',
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {images.map((image) => (
            <img
              style={{
                borderRadius: "100%",
              }}
              src={image}
              className="App-logo"
              alt="logo"
            />
          ))}
          <img
            style={{
              borderRadius: "100%",
            }}
            src={
              "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118507030_1169825093411955_6547663037328192201_o.jpg?_nc_cat=109&_nc_sid=a26aad&_nc_eui2=AeFwvkHJSwUYUjJkqws9ssXozeZykshgfcDN5nKSyGB9wBiY9jxhOfLDefHFo6lf0pzcH_A2F2sF3O3m3ZAhUKyf&_nc_ohc=oGwHyNI6mZcAX8vCsIo&_nc_ht=scontent.fmid3-1.fna&oh=26f4fc7d036e46fe9b5eab4c7371d75b&oe=5F6CA89B"
            }
            className="App-logo"
            alt="logo"
          />
          <img
            style={{
              borderRadius: "100%",
            }}
            src={
              "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118467650_1169825136745284_2563399689503029315_o.jpg?_nc_cat=108&_nc_sid=a26aad&_nc_eui2=AeEh2Znyoa4TeMVNhA8OHBBb-BdSRaKJqev4F1JFoomp6wwK-3FtX-ZHm4F8np6EV88uCkgK7QlgWaFSkD_9DEUm&_nc_ohc=1ttPJ10Wd-kAX8DRAAi&_nc_ht=scontent.fmid3-1.fna&oh=bec806695dfd9ee9d98beea9da1642d6&oe=5F6EF097"
            }
            className="App-logo"
            alt="logo"
          />
          <img
            style={{
              borderRadius: "100%",
            }}
            src={
              "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118197622_1169825240078607_4195982046474082933_o.jpg?_nc_cat=108&_nc_sid=a26aad&_nc_eui2=AeHTf0u9r8B-DycdHp_mw5Nw17efpdnVpOXXt5-l2dWk5QFlNvXyWn0P58HhZ9orlp4FfTfymyWAfiLUmibqFeye&_nc_ohc=d_IvWOeItr8AX-q-GuN&_nc_ht=scontent.fmid3-1.fna&oh=51556e1cd895fb5288b7376bb6acb6ba&oe=5F6D463E"
            }
            className="App-logo"
            alt="logo"
          />
          <img
            style={{
              borderRadius: "100%",
            }}
            src={
              "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118285940_1169825300078601_6176157642665363154_o.jpg?_nc_cat=110&_nc_sid=a26aad&_nc_eui2=AeH8wgMjoV3FFfufVaMoPkBu19SJCiOe_TPX1IkKI579MymMLOFtlHx1T0jA5Mx4RiMxBYglpCwaKNEMMh7Mz93D&_nc_ohc=bguGn-Ocd40AX-LNJKY&_nc_ht=scontent.fmid3-1.fna&oh=97cbb6cfcb3cd6023e1a1580e92b006c&oe=5F6BEBDE"
            }
            className="App-logo"
            alt="logo"
          />
        </div>
        <p>Hey chad! How are you? Just making your art spin.</p>
        <a className="App-link" href="https://www.carlosznava.com">
          Made by Carlos Z.
        </a>
      </header>
    </div>
  );
}

export default App;
