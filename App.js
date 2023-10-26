import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Header from "./src/Header";
import Main from "./src/Main";
import Footer from "./src/Footer";


function App() {


    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    )

}



export default App
