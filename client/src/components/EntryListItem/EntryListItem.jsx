import React from "react";
import { Link } from "react-router-dom";

const EntryListItem = ({ entry, onDelete }) => (
  <li>
    <p>{entry.content}</p>
    <p>
      <em>{entry.quote_of_the_day}</em>
    </p>
    <Link to={`/edit-entry/${entry.id}`}>Edit</Link>
    <button onClick={() => onDelete(entry.id)}>Delete</button>
  </li>
);

export default EntryListItem;
