import { useState, useEffect } from "react";
import "./App.css";
import { Fade, Bounce } from "react-reveal";
import axios from "axios";

function App() {
  const [quotes, setquotes] = useState([]); // we need to use [] instead of null in here
  const [status, setStatus] = useState("fetching");
 useEffect(() => {
    //for package.json - "start": "node ../server.js & react-scripts start",
    setTimeout(() => {
      fetchData(); // separate fetch data function created below and called in here;
    }, "1500");
  }, []);

  // used axios to fetch external link
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://quotes-node-server.onrender.com/"
      );
      setStatus("found data");
      setquotes(response.data);

      //:setquotes(response.data); // we are getting only data from response
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
            {status === "found data" ? (
              <div>
                <h2>" {quotes.quote} "</h2>
                <h4>
                  <span className="author-font">{quotes.author}</span>
                </h4>
                <hr></hr>
              </div>
            ) : (
              <h3>"Loading Quotes Please Wait .."</h3>
            )}
          </div>
        </Bounce>
      </Fade>
      <button onClick={getQuote}> Next quote </button>
    </div>
  );
}

export default App;
