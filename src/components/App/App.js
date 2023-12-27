import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AvitoApp from "../MyApps/Avito";
import DromApp from "../MyApps/Drom";
import { Route, Routes, Navigate  } from "react-router-dom";
import "./App.css"

function App() {
    const [isDesc, setIsDesc] = React.useState(true);

  
    function handleClick() {
      setIsDesc(!isDesc)
    }

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/avitoApp" element={<AvitoApp handleClick={handleClick} isDesc={isDesc}/>} />
                <Route path="/dromApp" element={<DromApp handleClick={handleClick} isDesc={isDesc}/>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            
            <Footer />
        </div>
    )

}



export default App
