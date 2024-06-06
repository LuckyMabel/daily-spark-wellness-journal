import React, { useState } from "react";
import axios from "axios";

const Quote = ({ quote, setQuote }) => {
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/random-quote`
      );
      setQuote(response.data.content);
    } catch (err) {
      setError(true);
    }
  };

  const handleChangeQuote = (e) => {
    e.preventDefault(); // Prevent form submission
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
