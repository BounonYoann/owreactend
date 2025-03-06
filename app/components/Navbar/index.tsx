"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";

const Navbarin: React.FC = () => {
  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (fn: Function) => {
      let frame: number;
      return (...params: any[]) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    // Reads out the scroll position and stores it in the data attribute
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    // Listen for new scroll events, debounce our storeScroll function
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });

    // Initial scroll position update
    storeScroll();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Navbarin;
