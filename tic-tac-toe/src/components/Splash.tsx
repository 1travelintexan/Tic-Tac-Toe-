import React from "react";

function Splash(props: any) {
  const { handleNames } = props;
  return (
    <div className="splash-page">
      <div className="splash-div">
        <h1>True Love Test!</h1>
        <h3>
          Play a game of Tic-Tac-Toe and find out if your partner is your True
          Love!
        </h3>
      </div>
      <form className="splash-form" onSubmit={handleNames}>
        <label>Your Name:</label>
        <input name="yourName" type="text"></input>
        <h1>VS</h1>
        <label>Partners Name:</label>
        <input name="partnersName" type="text"></input>
      </form>
      <button type="submit">Begin</button>
    </div>
  );
}

export default Splash;
