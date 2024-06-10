import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EntryListItem from "../../components/EntryListItem/EntryListItem";
import "./ViewEntries.scss";
import viewEntries from "../../assets/images/view-entries.png";

const ViewEntries = () => {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [filterYear, setFilterYear] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterDay, setFilterDay] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
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
        setFilteredEntries(sortedEntries);
      } catch (error) {
        console.error("Failed to fetch entries:", error);
      }
    };

    fetchEntries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/entries/${id}`);
      const updatedEntries = entries.filter((entry) => entry.id !== id);
      setEntries(updatedEntries);
      setFilteredEntries(updatedEntries.filter(filterByDate));
    } catch (error) {
      console.error("Failed to delete entry:", error);
    }
  };

  const handleYearChange = (e) => {
    setFilterYear(e.target.value);
    filterEntries(e.target.value, filterMonth, filterDay, searchQuery);
  };

  const handleMonthChange = (e) => {
    setFilterMonth(e.target.value);
    filterEntries(filterYear, e.target.value, filterDay, searchQuery);
  };

  const handleDayChange = (e) => {
    setFilterDay(e.target.value);
    filterEntries(filterYear, filterMonth, e.target.value, searchQuery);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterEntries(filterYear, filterMonth, filterDay, e.target.value);
  };

  const filterEntries = (year, month, day, query) => {
    let filtered = entries;

    if (year) {
      filtered = filtered.filter(
        (entry) => new Date(entry.timestamp).getFullYear() === parseInt(year)
      );
    }
    if (month) {
      filtered = filtered.filter(
        (entry) => new Date(entry.timestamp).getMonth() + 1 === parseInt(month)
      );
    }
    if (day) {
      filtered = filtered.filter(
        (entry) => new Date(entry.timestamp).getDate() === parseInt(day)
      );
    }
    if (query) {
      filtered = filtered.filter((entry) =>
        entry.content.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredEntries(filtered);
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
        <img src={viewEntries} alt="View Entries" />
      </div>
      <div className="view-entries__filters">
        <input
          type="text"
          className="view-entries__search"
          placeholder="Search entries..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select
          className="view-entries__filter"
          onChange={handleYearChange}
          value={filterYear}
        >
          <option value="">Year</option>
          {[
            ...new Set(
              entries.map((entry) => new Date(entry.timestamp).getFullYear())
            ),
          ].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          className="view-entries__filter"
          onChange={handleMonthChange}
          value={filterMonth}
        >
          <option value="">Month</option>
          {[...Array(12).keys()].map((month) => (
            <option key={month + 1} value={month + 1}>
              {month + 1}
            </option>
          ))}
        </select>
        <select
          className="view-entries__filter"
          onChange={handleDayChange}
          value={filterDay}
        >
          <option value="">Day</option>
          {[...Array(31).keys()].map((day) => (
            <option key={day + 1} value={day + 1}>
              {day + 1}
            </option>
          ))}
        </select>
      </div>
      <table className="view-entries__table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Entries</th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry) => (
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
