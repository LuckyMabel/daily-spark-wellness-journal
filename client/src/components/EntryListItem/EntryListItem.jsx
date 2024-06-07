import React from "react";
import { Link } from "react-router-dom";
import "./EntryListItem.scss";

const EntryListItem = ({ entry, onDelete }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <li className="entry-list-item">
      <div className="entry-date">{formatDate(entry.timestamp)}</div>
      <div className="entry-content">
        <p>{entry.content}</p>
        <p>
          <em>{entry.quote_of_the_day}</em>
        </p>
        <Link to={`/edit-entry/${entry.id}`}>Edit</Link>
        <button onClick={() => onDelete(entry.id)}>Delete</button>
      </div>
    </li>
  );
};

export default EntryListItem;
