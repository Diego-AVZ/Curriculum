// src/components/MetaMaskConnector.tsx
//import React, { useState } from "react";
import Web3 from "web3";
import Button from '../components/Button';

// Función para conectar MetaMask
async function connectMetaMask(setAccount: React.Dispatch<React.SetStateAction<string | null>>) {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" }); // Solicitar acceso a las cuentas

      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]); // Establecer la cuenta conectada

    } catch (error) {
      console.error("Error de conexión a MetaMask", error);
    }
  } else {
    console.error("MetaMask no está instalado");
  }
}

interface MetaMaskConnectorProps {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const MetaMaskConnector: React.FC<MetaMaskConnectorProps> = ({ setAccount }) => {
  const handleConnect = () => {
    connectMetaMask(setAccount); // Llamar a la función de conexión de MetaMask
  };

  return (
    <div>
      <Button style={{position:"absolute", right:"1vw", top:"2vh", backgroundColor:"rgba(137, 192, 230, 0.63)"}}onClick={handleConnect}>Conectar MetaMask</Button>
    </div>
  );
};

export default MetaMaskConnector;
