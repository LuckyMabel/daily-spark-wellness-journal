import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Daily Spark</h1>
      <nav>
        <ul>
          <li>
            <Link to="/add-entry">Add Entry</Link>
          </li>
          <li>
            <Link to="/view-entries">View Entries</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
