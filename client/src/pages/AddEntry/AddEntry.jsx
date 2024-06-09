import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "../../components/Quote/Quote";
import { useNavigate } from "react-router-dom";
import "./AddEntry.scss";
import addEntry from "../../assets/images/add-entry.png";
import bottom from "../../assets/images/bottom.png";

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
    <div className="add-entry">
      <button className="add-entry__back-button" onClick={() => navigate("/")}>
        ❮
      </button>
      <div className="add-entry__header">
        <img src={addEntry} alt="Add Entry" />
        <h2 className="add-entry__title">Gratitude Prompt</h2>
        <div className="add-entry__quote">
          <p>{quote}</p>
          <button className="add-entry__change-button" onClick={fetchNewQuote}>
            Change
          </button>
        </div>
      </div>
      <form className="add-entry__form" onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="I feel grateful for..."
          className="add-entry__textarea"
          required
        />
        <div className="add-entry__buttons">
          <button type="submit" className="add-entry__submit-button">
            Submit
          </button>
          <button
            type="button"
            className="add-entry__cancel-button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
      {submitSuccess && (
        <div className="submit__success">
          <p>
            Upload success! You will be redirected to the list of entries page.
          </p>
        </div>
      )}
      <div className="add-entry__bottom-decorations">
        <img src={bottom} alt="Bottom Decoration" />
        <img src={bottom} alt="Bottom Decoration" />
        <img src={bottom} alt="Bottom Decoration" />
      </div>
    </div>
  );
};

export default AddEntry;
