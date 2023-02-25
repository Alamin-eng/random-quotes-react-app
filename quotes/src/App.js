import { useState, useEffect } from "react";
import "./App.css";
import { Fade, Bounce } from "react-reveal";
import axios from "axios";

function App() {
  const [quotes, setquotes] = useState([]); // we need to use [] instead of null in here

  useEffect(() => {
    //for package.json - "start": "node ../server.js & react-scripts start",
    fetchData(); // separate fetch data function created below and called in here
  }, []);

// used axios to fetch external link
const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://quotes-node-server.onrender.com/"
    );
    setquotes(response.data); // we are getting only data from response
  } catch (error) {
    console.error(error);
  }
};

  function getQuote() {
    window.location.reload();
  }

  return (
    <div className="mainDiv">
      <Fade top cascade>
        <h1>Random Quotes</h1>
        <Bounce left cascade>
          <div className="parent">
            <h2>
              {" "}
              " {!quotes.quote
                ? "Click button for next quote"
                : quotes.quote} "{" "}
            </h2>
            <h4>
              {" "}
              <span className="author-font">{quotes.author && quotes.author}</span>{" "}
            </h4>
            <hr></hr>
          </div>
        </Bounce>
      </Fade>
      <button onClick={getQuote}> Next quote </button>
    </div>
  );
}

export default App;
