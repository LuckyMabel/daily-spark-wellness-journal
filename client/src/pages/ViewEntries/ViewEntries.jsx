import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EntryListItem from "../../components/EntryListItem/EntryListItem";

const ViewEntries = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/entries`
        );
        setEntries(response.data);
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
    <div>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <h2>View Entries</h2>
      <ul>
        {entries.map((entry) => (
          <EntryListItem key={entry.id} entry={entry} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ViewEntries;
