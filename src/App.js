import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home.jsx";
import Get from "./Get.jsx";
import { Routes, Route } from "react-router-dom";
import Nine from "./Nine.jsx";
import Header from "./Header.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Get" element={<Get />} />
                <Route path="Nine" element={<Nine />} />
            </Routes>
        </div>
    );
}

export default App;
