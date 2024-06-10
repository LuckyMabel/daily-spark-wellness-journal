import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "../../components/Quote/Quote";
import { useNavigate, useParams } from "react-router-dom";
import "./EditEntry.scss";
import editEntry from "../../assets/images/edit-entry.png";
import bottom from "../../assets/images/bottom.png";

const EditEntry = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [quote, setQuote] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/entries/${id}`
        );
        setContent(response.data.content);
        setQuote(response.data.quote_of_the_day);
      } catch (error) {
        console.error("Failed to fetch entry:", error);
      }
    };

    fetchEntry();
  }, [id]);

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
      await axios.put(`${import.meta.env.VITE_BASE_URL}/entries/${id}`, {
        content,
        quote_of_the_day: quote,
      });
      setSubmitSuccess(true);
      setTimeout(() => {
        navigate("/view-entries");
      }, 3000);
    } catch (error) {
      console.error("Failed to update entry:", error);
    }
  };

  return (
    <div className="edit-entry">
      <button
        onClick={() => navigate("/view-entries")}
        className="edit-entry__back-button"
      >
        ❮
      </button>
      <div className="edit-entry__header">
        <img className="edit-entry__image" src={editEntry} alt="Edit Entry" />
      </div>
      <h2 className="edit-entry__title">Gratitude prompt</h2>
      <div className="edit-entry__quote">
        <p>{quote}</p>
        <button className="edit-entry__change-button" onClick={fetchNewQuote}>
          Change
        </button>
      </div>
      <form onSubmit={handleSubmit} className="edit-entry__form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="edit-entry__textarea"
          required
        />
        <div className="edit-entry__buttons">
          <button type="submit" className="edit-entry__submit-button">
            UPDATE
          </button>
          <button
            type="button"
            className="edit-entry__cancel-button"
            onClick={() => navigate("/view-entries")}
          >
            CANCEL
          </button>
        </div>
      </form>
      {submitSuccess && (
        <div className="submit__success">
          <p>
            Update success! You will be redirected to the list of entries page.
          </p>
        </div>
      )}
      <div className="edit-entry__bottom-decorations">
        <img src={bottom} alt="Decoration" />
        <img src={bottom} alt="Decoration" />
        <img src={bottom} alt="Decoration" />
      </div>
    </div>
  );
};

export default EditEntry;
