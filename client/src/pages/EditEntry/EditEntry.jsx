import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "../../components/Quote/Quote";
import { useNavigate, useParams } from "react-router-dom";

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
    <div>
      <button onClick={() => navigate("/view-entries")}>
        Back to View Entries
      </button>
      <h2>Edit Entry</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Quote
          initialQuote={quote}
          setQuote={setQuote}
          onFetchNewQuote={fetchNewQuote}
        />
        <button type="submit">Submit</button>
      </form>
      {submitSuccess && (
        <div className="submit__success">
          <p>
            Update success! You will be redirected to the list of entries page.
          </p>
        </div>
      )}
    </div>
  );
};

export default EditEntry;
