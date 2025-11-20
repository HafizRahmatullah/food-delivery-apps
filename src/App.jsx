// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/CategoryPage";


function App() {
  return (
    <div className="flex h-screen bg-go-meal-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
       
      </div>
    </div>
  );
}

export default App;
