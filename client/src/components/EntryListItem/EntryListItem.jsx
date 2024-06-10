import React from "react";
import { Link } from "react-router-dom";
import "./EntryListItem.scss";

const EntryListItem = ({ entry, onDelete }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (confirmDelete) {
      onDelete(entry.id);
    }
  };

  return (
    <tr className="entry-list-item">
      <td className="entry-list-item__date">{formatDate(entry.timestamp)}</td>
      <td className="entry-list-item__content">
        <p>{entry.content}</p>
        <div className="entry-list-item__buttons">
          <Link
            to={`/edit-entry/${entry.id}`}
            className="entry-list-item__edit-button"
          >
            Edit
          </Link>
          <button
            className="entry-list-item__delete-button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EntryListItem;
