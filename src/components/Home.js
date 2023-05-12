import React from 'react';
import { ReactComponent as ReactLogo } from "./undraw_chat_re_re1u.svg";

function Home(props) {
    return (
        <div>
            <div
        style={{
          marginTop: "8rem",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "20PX",
        }}
      >
        <ReactLogo />
      </div>
        </div>
    );
}

export default Home;