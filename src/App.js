import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainerSearch from "./components/trainersearch";
import TrainerList from "./pages/TrainerList";
import TrainerDetail from "./pages/TrainerDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrainerSearch />} />
        <Route path="/trainer-list" element={<TrainerList />} />
        <Route path="/trainer/:id" element={<TrainerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
