import React from "react";

const Quote = ({ initialQuote, setQuote, onFetchNewQuote }) => {
  const handleChangeQuote = (e) => {
    e.preventDefault();
    onFetchNewQuote();
  };

  return (
    <div>
      <p>{initialQuote}</p>
      <button onClick={handleChangeQuote}>Change</button>
    </div>
  );
};

export default Quote;
