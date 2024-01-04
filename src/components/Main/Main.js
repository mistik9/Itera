import React from "react";
import Feedback from "../Feedback/Feedback";
import MyApps from "../MyApps/MyApps";
import About from "../About/About";



function Main() {

  return (
    <main className="main">
      <About />
      <MyApps />
      <Feedback />
    </main>
  )
}

export default Main;