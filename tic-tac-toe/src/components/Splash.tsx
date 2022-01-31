import React from "react";

function Splash(props: any) {
  const { handleNames } = props;
  return (
    <div className="splash-page">
      <div className="splash-div">
        <h1>Tic-Tac-Love?</h1>
        <h2>
          Based on how you play the game with your significant other, we can
          predict the success rate of your relationship.
        </h2>
      </div>
      <form className="splash-form" onSubmit={handleNames}>
        <label>Your Name:</label>
        <input name="yourName" type="text"></input>
        <h1>-VS-</h1>
        <label>Partners Name:</label>
        <input name="partnersName" type="text"></input>
        <button type="submit">Begin</button>
      </form>
    </div>
  );
}

export default Splash;
