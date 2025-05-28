import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image"
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
// Images
import beforeImg from "/public/before.jpg";
import afterImg from "/public/after.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <div className="page">
      <div className="text-container">
        <p>
          Images of Bergen from Wikipedia 
          <br/>
          <a href="https://no.wikipedia.org/wiki/Bryggen_i_Bergen">wikipedia.org/wiki/Bryggen_i_Bergen</a>
        </p>
        <p>
          Before:    12.juni 1930 
          <br/>
          After:  9 October 2005
        </p>
      </div>
      <div className="container">
        <div className="inner-container">
          <div className="images">
            <img className="page_image before" id="before" src={beforeImg.src}>
            </img>
            <img className="page-image after" id="after" src={afterImg.src}>
            </img>
          </div>
          <input type="range" min={0} max={100} defaultValue={50} className="before-after-slider"></input>
          <div className="before-after-border"></div>
          <div className="before-after-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
}



if (typeof window !== "undefined") {
  const container = document.querySelector(".inner-container");
  document.querySelector(".before-after-slider")?.addEventListener('input', (e) =>{
    container.style.setProperty("--position", `${e.target.value}%`)
  })
}