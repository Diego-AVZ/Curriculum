"use client";

import "./globals.css";
import Button from '../components/Button';
import Rectangle from "@/components/Rectangle";
import Circle from "@/components/Circle";
import React, { useState } from "react";
import MetaMaskConnector from "../components/MetaMaskConnector"; 
import Item from "@/components/MenuItem";


export default function Home() {
  const [account, setAccount] = useState<string | null>(null);
  return (
    <main>
      <div style={{height:"100vh", backgroundColor:"black", position:"relative"}}>
        <img src="/logo.png" style={{position:"absolute", width:"6vw", marginTop:"0.5vw", marginLeft:"1vw"}} alt="Avz Tech Logo" />
        <img src="/bgHome.png.webp" className="bgImage" alt="background Image" />
        <div className="menu">
          <Item>Projects</Item>
          <Item>Finances</Item>
          <Item>Articles</Item>
          <Item>Get In Touch</Item>
        </div>
        <MetaMaskConnector setAccount={setAccount} />
        <p className="big-tittle">· Avz Tech·</p>
        <p className="small-tittle">Blockchain Researcher & Developer</p>
        <Rectangle ml="29vw" mt="44vh" c="white" w="40vw" h="auto" r="0deg">
          <p>Passionate about Industry 4.0 technologies, I specialize in blockchain development, Web3 applications, and decentralized finance (DeFi). Proficient in JavaScript, TypeScript, Python, and Solidity, I focus on building real-world dApps and leveraging blockchain for innovative solutions. With extensive experience in smart contracts, decentralized applications, and Web3 integrations, I am dedicated to advancing the blockchain ecosystem and contributing to cutting-edge projects.   </p> 
          <Circle  ml="-8vw" mt="-1.3vh" c="rgba(137, 192, 230, 0.63)" w="20vw" h="20vw" r="0deg"></Circle>
          <Circle  ml="20vw" mt="-66vh" c="rgba(137, 192, 230, 0.63)" w="20vw" h="20vw" r="0deg"></Circle>
        </Rectangle>
        <Rectangle ml="45vw" mt="89vh" c="white" w="10vw" h="10vw" r="45deg">
        </Rectangle>
        
      </div>
      <Rectangle ml="-0.5vw" mt="0vh" c="white" w="100vw" h="100vh" r="0deg">
        
      </Rectangle>
    </main>
  );
}
