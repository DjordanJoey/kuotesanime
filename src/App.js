import React, {useState, useEffect} from "react";
import Quotes from "./components/Quotes";

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  });

  const fetchQuote = async () => {
    return await fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json());
  }

  const generate = async () => {
    setQuote(await fetchQuote());
  }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(  () => {
    setQuote(fetchQuote);
  }, []);

  return (
    <div className="App">
      <Quotes quote={quote} />
      <button onClick={generate}>Generate new quotes</button>
    </div>
  );
}

export default App;
