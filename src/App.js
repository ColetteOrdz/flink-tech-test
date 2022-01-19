import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import RegModal from "./Pages/Components/RegModal";
import Home from "./Pages/Home";
//import LogModal from "./Pages/Components/LogModal";
import MainView from "./Pages/MainView";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/login" element={<LogModal />} />
        <Route path="/register" element={<RegModal />} /> */}
        <Route path="/main" element={<MainView />} />
      </Routes>
    </Router>
  );
}

export default App;
