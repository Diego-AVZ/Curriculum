/* eslint-disable @typescript-eslint/no-explicit-any */

import Web3 from "web3";
import Button from '../components/Button';

async function connectMetaMask(setAccount: React.Dispatch<React.SetStateAction<string | null>>) {
  if ((window as any).ethereum) {  
    const web3 = new Web3((window as any).ethereum);
    try {
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0] || null);
    } catch (error) {
      console.error('User denied account access', error);
    }
  } else {
    console.error('MetaMask is not installed');
  }
}

interface MetaMaskConnectorProps {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const MetaMaskConnector: React.FC<MetaMaskConnectorProps> = ({ setAccount }) => {
  const handleConnect = () => {
    connectMetaMask(setAccount);
  };

  return (
    <div>
      <Button style={{position:"absolute", right:"1vw", top:"2vh", backgroundColor:"rgba(137, 192, 230, 0.63)"}}onClick={handleConnect}>Conectar MetaMask</Button>
    </div>
  );
};

export default MetaMaskConnector;
