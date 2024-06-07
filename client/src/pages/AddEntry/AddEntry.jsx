import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "../../components/Quote/Quote";
import { useNavigate } from "react-router-dom";

const AddEntry = () => {
  const [content, setContent] = useState("");
  const [quote, setQuote] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialQuote = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/random-quote`
        );
        setQuote(response.data.content);
      } catch (err) {
        console.error("Failed to fetch initial quote:", err);
      }
    };

    fetchInitialQuote();
  }, []);

  const fetchNewQuote = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/random-quote`
      );
      setQuote(response.data.content);
    } catch (err) {
      console.error("Failed to fetch new quote:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/entries`, {
        content,
        quote_of_the_day: quote,
      });
      setSubmitSuccess(true);
      setTimeout(() => {
        navigate("/view-entries");
      }, 3000);
    } catch (error) {
      console.error("Failed to add entry:", error);
    }
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <h2>Add Entry</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="I am grateful for..."
        />
        <Quote
          initialQuote={quote}
          setQuote={setQuote}
          onFetchNewQuote={fetchNewQuote}
        />
        <button type="submit">Submit</button>
      </form>
      {submitSuccess && (
        <div className="upload__success">
          <p>Upload success!</p>
        </div>
      )}
    </div>
  );
};

export default AddEntry;
