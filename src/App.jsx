import { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="/:everythingElse" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
