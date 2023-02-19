import { useState, useEffect } from "react";
import "./App.css";
import { Fade, Bounce } from "react-reveal";

function App() {
  const [quotes, setquotes] = useState([]); // we need to use [] instead of null in here
  useEffect(() => {
    fetch("http://localhost:3002")
      .then((res) => res.json())
      .then((data) => {
        setquotes(data);
        console.log(data);
      });
  }, []);

  function getQuote() {
    return window.location.reload();
  }

  return (
    <div className="mainDiv">
      <Fade top cascade>
        <h1>Random Quotes</h1>
        <Bounce left cascade>
          <div className="parent">
            <h2> " {quotes.quote} " </h2>
            <h4> {quotes.author} </h4>
            <hr></hr>
          </div>
        </Bounce>
      </Fade>
      <button onClick={getQuote}> Next quote </button>
    </div>
  );
}

export default App;
