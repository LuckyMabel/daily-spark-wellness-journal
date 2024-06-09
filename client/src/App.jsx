import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddEntry from "./pages/AddEntry/AddEntry";
import ViewEntries from "./pages/ViewEntries/ViewEntries";
import EditEntry from "./pages/EditEntry/EditEntry";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-entry" element={<AddEntry />} />
          <Route path="/view-entries" element={<ViewEntries />} />
          <Route path="/edit-entry/:id" element={<EditEntry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
