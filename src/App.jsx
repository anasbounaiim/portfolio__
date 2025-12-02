import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Myapp from "./components/Myapp";

function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-darkgray">
      <p className="text-center text-5xl text-white">Page not found</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Myapp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
