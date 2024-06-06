import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = ({ setQuote }) => {
  const [quote, setLocalQuote] = useState("");
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/random-quote`
      );
      setLocalQuote(response.data.content);
      setQuote(response.data.content);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleChangeQuote = (e) => {
    e.preventDefault();
    fetchQuote();
  };

  if (error) {
    return <div>There was an error fetching the quote!</div>;
  }

  return (
    <div>
      <p>{quote}</p>
      <button onClick={handleChangeQuote}>Change</button>
    </div>
  );
};

export default Quote;
