import React from "react";
import "../styles/commonStyles.css"
const WelcomeText = () => {
  return (
    <div>
      <h1 className="font-weight-light">
        <span className="font-weight-bold">VISMA</span> Sign
      </h1>
      <p
        style={{
          fontSize: "1.9em",
          fontWeight: "lighter",
          color: "#222222",
          lineHeight: 1.5,
        }}
      >
        Tervetuloa Kayttamaan <br />
        suomen monipuolisinta <br />
        allekirjoituspalvelua
      </p>
    </div>
  );
};

export default WelcomeText;
