import React from "react";

function Splash() {
  return (
    <div>
      <h1>We have engineered the perfect match making algorithm!</h1>
      <h3>
        All you have to do is input your name and the person of your dreams
        inputs their name, after we analyse your playing techniques, we can tell
        you if you are compatible or not.
      </h3>
      <form>
        <label>Your Name:</label>
        <input></input>
        <label>Partners Name:</label>
        <input></input>
        <button>Begin</button>
      </form>
    </div>
  );
}

export default Splash;
