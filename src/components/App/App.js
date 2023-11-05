import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AvitoApp from "../MyApps/Avito";
import DromApp from "../MyApps/Drom";
import { Route, Routes } from "react-router-dom";
import "./App.css"

function App() {


    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/avitoApp" element={<AvitoApp/>} />
                <Route path="/dromApp" element={<DromApp />} />
            </Routes>
            <Footer />
        </div>
    )

}



export default App
