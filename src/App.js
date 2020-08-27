import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const images = [
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118374523_1169825356745262_5155886012404981388_o.jpg?_nc_cat=106&_nc_sid=a26aad&_nc_eui2=AeETr3JjWQmzpm3YFYuahpDkcuUi15448cdy5SLXnjjxx65bkl-2StR10ycyRMWAZALmYpMJVO-8ekv4VvrWxM34&_nc_ohc=3U5dn1Jnd1QAX86eufg&_nc_oc=AQmS5YBkM3gISj0rjnfIc77hmGsJNe9pi5xnKQxcB3xECst4Uf8VH4qG1YXDnziAH3owKppHs9Hx4A0MLULPyGAy&_nc_ht=scontent.fmid3-1.fna&oh=083faf5b3a648a6d15951913d9b94ddf&oe=5F6D4868",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118507030_1169825093411955_6547663037328192201_o.jpg?_nc_cat=109&_nc_sid=a26aad&_nc_eui2=AeFwvkHJSwUYUjJkqws9ssXozeZykshgfcDN5nKSyGB9wBiY9jxhOfLDefHFo6lf0pzcH_A2F2sF3O3m3ZAhUKyf&_nc_ohc=oGwHyNI6mZcAX8vCsIo&_nc_ht=scontent.fmid3-1.fna&oh=26f4fc7d036e46fe9b5eab4c7371d75b&oe=5F6CA89B",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118467650_1169825136745284_2563399689503029315_o.jpg?_nc_cat=108&_nc_sid=a26aad&_nc_eui2=AeEh2Znyoa4TeMVNhA8OHBBb-BdSRaKJqev4F1JFoomp6wwK-3FtX-ZHm4F8np6EV88uCkgK7QlgWaFSkD_9DEUm&_nc_ohc=1ttPJ10Wd-kAX8DRAAi&_nc_ht=scontent.fmid3-1.fna&oh=bec806695dfd9ee9d98beea9da1642d6&oe=5F6EF097",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118197622_1169825240078607_4195982046474082933_o.jpg?_nc_cat=108&_nc_sid=a26aad&_nc_eui2=AeHTf0u9r8B-DycdHp_mw5Nw17efpdnVpOXXt5-l2dWk5QFlNvXyWn0P58HhZ9orlp4FfTfymyWAfiLUmibqFeye&_nc_ohc=d_IvWOeItr8AX-q-GuN&_nc_ht=scontent.fmid3-1.fna&oh=51556e1cd895fb5288b7376bb6acb6ba&oe=5F6D463E",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118285940_1169825300078601_6176157642665363154_o.jpg?_nc_cat=110&_nc_sid=a26aad&_nc_eui2=AeH8wgMjoV3FFfufVaMoPkBu19SJCiOe_TPX1IkKI579MymMLOFtlHx1T0jA5Mx4RiMxBYglpCwaKNEMMh7Mz93D&_nc_ohc=bguGn-Ocd40AX-LNJKY&_nc_ht=scontent.fmid3-1.fna&oh=97cbb6cfcb3cd6023e1a1580e92b006c&oe=5F6BEBDE",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118499877_1169825410078590_3969398110668329034_o.jpg?_nc_cat=111&_nc_sid=a26aad&_nc_eui2=AeGLiZavq-KQRN0_0_19e6rlaACCg5nqZkRoAIKDmepmRAQfvqSoo3esFdTC6YOcBc0-3YxFU4xg0Ez6XxZaYjpG&_nc_ohc=KuATOmaSleUAX-tr-I3&_nc_ht=scontent.fmid3-1.fna&oh=911e652ba91bdcb2f46423fb123f1d27&oe=5F6C2197",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118353517_1169825466745251_3012706913864521462_o.jpg?_nc_cat=105&_nc_sid=a26aad&_nc_eui2=AeGL4rSfklAYmF-AasNmAhU8JONsHRe-7Lsk42wdF77su5GUlbqtGuq2G5ab0VSTl9tZWWD3M2kIZpMUxxjNWpc2&_nc_ohc=12CYOGejPvIAX-3-KlQ&_nc_ht=scontent.fmid3-1.fna&oh=db1aeae0405b6d6e7f39a8898f5f5a48&oe=5F6E77EE",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118293522_1169825496745248_6078050860291759823_o.jpg?_nc_cat=104&_nc_sid=a26aad&_nc_eui2=AeE2a9NyKJ0kTvWbSbpmtdCSaG1JKonQ2QpobUkqidDZCpNiaERd8_c1dnLt9Inz0R68lifskE9--ISLA3GDVXoD&_nc_ohc=jnNjsFgvpeoAX_SpKP5&_nc_ht=scontent.fmid3-1.fna&oh=48b3ae1ae31afb990979efa2e677f659&oe=5F6E8638",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/117987201_1167303303664134_3745188654034377781_o.jpg?_nc_cat=106&_nc_sid=a26aad&_nc_eui2=AeHXl9jgm139CW2QW1tm4_JSpmMicYMuzlWmYyJxgy7OVStUXE6nmfLO14ZPsmofAM8OabhKrUgWGUIpeg5q-5Ux&_nc_ohc=FFVYGQ-fF7YAX-1F9BA&_nc_ht=scontent.fmid3-1.fna&oh=b1fd58e69943a898efa4444ef34b522e&oe=5F6C10D3",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118265783_1167303273664137_3158173312644924730_o.jpg?_nc_cat=100&_nc_sid=a26aad&_nc_eui2=AeFqshVmJdd4v54wT1Z31cQ7WylEoqJpqzZbKUSiommrNkkEaJ2_AMPF1hxxFOE1cUCp-MMyV7a4FdBtxTmocqS6&_nc_ohc=7grXmkZgT3YAX_kShPM&_nc_ht=scontent.fmid3-1.fna&oh=9ee3c312b4740943165ee7d0fff4c9c0&oe=5F6C5CC2",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118381976_1167303236997474_8362397158254640149_o.jpg?_nc_cat=100&_nc_sid=a26aad&_nc_eui2=AeF-KQnPTn32KJQ4NQA7WXrvqiQHa_jgiSiqJAdr-OCJKBrTRh9UJLN9MIsCZacbd_3L69noMc-Dx28HLNnT2gVt&_nc_ohc=cbOSoX87Hx4AX_3AHDO&_nc_ht=scontent.fmid3-1.fna&oh=7436126b139be980a1b61dc232ae08b2&oe=5F6C48E5",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118256905_1167303183664146_1098454177622237541_o.jpg?_nc_cat=103&_nc_sid=a26aad&_nc_eui2=AeGeVMaPWzqp1OCZAQ8ZRY-HwIsBAHPxGhjAiwEAc_EaGFcAAmr5evkUYU3ujmyt6Kq4tc_MrynCXNWcj3qVqCrD&_nc_ohc=_SiXWw94oI4AX9a6ug0&_nc_ht=scontent.fmid3-1.fna&oh=28d212f954933d9126de1e16f6a51c8f&oe=5F6D6A16",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/117946727_1167303126997485_5758596998330625044_o.jpg?_nc_cat=107&_nc_sid=a26aad&_nc_eui2=AeG_55GgaCRjuxPMKmfeMNqygWO4UVZ5zSCBY7hRVnnNIL0V0cDbp2eEomjkYHaaO1CwAIE2jdwTt08pfPQLAaka&_nc_ohc=09dqcuInGkAAX8IdDBO&_nc_ht=scontent.fmid3-1.fna&oh=b5ff605d48dfb3af1e3a4c376ee9c4be&oe=5F6D107C",
    "https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/118146141_1167302983664166_1497037482418507292_o.jpg?_nc_cat=101&_nc_sid=a26aad&_nc_eui2=AeFG9MWpKIy0URJEVW7lvXJOGE_xVNlMgE4YT_FU2UyATlaf_PO76zfccnoYaUSVV1_v40pFQJHVbTZ3kN-q5nYj&_nc_ohc=h_SlN55pExEAX_B6NiJ&_nc_ht=scontent.fmid3-1.fna&oh=59deb675abffbd70f5ecf7363ec21877&oe=5F6E686E",
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            padding: "16px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {images.map((image, i) => (
            <img
              key={i}
              style={{
                borderRadius: "100%",
              }}
              src={image}
              className="App-logo"
              alt="logo"
            />
          ))}
        </div>
        <p>
          Hey chad! How are you?
          <br />
          Just making your art spin.
        </p>
        <div
          style={{
            padding: "16px",
          }}
        >
          <a className="App-link" href="https://www.carlosznava.com">
            Made by Carlos Z.
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
