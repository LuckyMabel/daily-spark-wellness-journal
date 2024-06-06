import React, { useState } from "react";
import axios from "axios";
import Quote from "../../components/Quote/Quote";
import { useNavigate } from "react-router-dom";

const AddEntry = () => {
  const [content, setContent] = useState("");
  const [quote, setQuote] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

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

  const handleQuoteChange = (newQuote) => {
    setQuote(newQuote);
    setSubmitSuccess(false);
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
        <Quote setQuote={handleQuoteChange} />
        <button type="submit">Submit</button>
      </form>
      {submitSuccess && (
        <div className="upload__success">
          <p>
            Upload success! You will be redirected to the list of entries page.
          </p>
        </div>
      )}
    </div>
  );
};

export default AddEntry;
