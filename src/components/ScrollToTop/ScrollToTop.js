import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useMatch } from "react-router-dom";
import "./ScrollToTop.css"





export default function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const path = useLocation().pathname.replace(/[^\/]+$/, '');
  const  {key } =useLocation()

  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };



  useEffect(() => {
    if (path.length === 1) {
        goToTop()
    }
    else {
       document.documentElement.scrollIntoView({ 
        block: "nearest", inline: "start", behavior: "smooth" });
    }  }, [key]);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);



  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
        <motion.button
          onClick={goToTop}
          className="scrollToTop-btn"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 1 }}
        >
        </motion.button>
      )}
    </AnimatePresence>
  );
}
