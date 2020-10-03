import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Leftsection from "./components/layout/Leftsection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="main-container">
        <Sidebar />
        <Leftsection />
      </header>
    </div>
  );
}

export default App;
