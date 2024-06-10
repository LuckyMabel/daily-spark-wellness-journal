import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EntryListItem from "../../components/EntryListItem/EntryListItem";
import "./ViewEntries.scss";

const ViewEntries = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/entries`
        );
        const sortedEntries = response.data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setEntries(sortedEntries);
      } catch (error) {
        console.error("Failed to fetch entries:", error);
      }
    };

    fetchEntries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/entries/${id}`);
      setEntries(entries.filter((entry) => entry.id !== id));
    } catch (error) {
      console.error("Failed to delete entry:", error);
    }
  };

  return (
    <div className="view-entries">
      <button
        className="view-entries__back-button"
        onClick={() => navigate("/")}
      >
        ❮
      </button>
      <div className="view-entries__header">
        <img src="/src/assets/images/view-entries.png" alt="View Entries" />
      </div>
      <table className="view-entries__table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Entries</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <EntryListItem
              key={entry.id}
              entry={entry}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEntries;
