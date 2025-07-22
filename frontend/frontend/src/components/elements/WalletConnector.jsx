import { BrowserProvider, Contract } from 'ethers';
import { useState } from 'react';
import '../../styles/WalletConnector.css';

// Example functional component
//contractABI needs to be read froma deployed contracts .json
//CAdress needs to be read from a .env
function WalletConnector({ CONTRACT_ADDRESS, contractABI }) {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [error, setError] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const userAddress = accounts[0];
        setAccount(userAddress);

        // Create provider and signeR
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Create contract instance 
        const contractInstance = new Contract(CONTRACT_ADDRESS, contractABI, signer);
        setContract(contractInstance);

        // Check ownership
        const owner = await contractInstance.owner();
        setIsOwner(owner.toLowerCase() === userAddress.toLowerCase());

        console.log('Wallet connected:', userAddress);
        console.log('Is owner:', owner.toLowerCase() === userAddress.toLowerCase());
        
        return contractInstance;
      } else {
        setError('MetaMask is not installed. Please install MetaMask to continue.');
      }
    } catch (err) {
      console.error('Connection error:', err);
      setError('Failed to connect wallet: ' + (err.message || 'Unknown error'));
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setContract(null);
    setIsOwner(false);
    setError(null);
  };

  return (
    <div className="wallet-connector">      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {!account ? (
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className="connect-button"
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      ) : (
        <div className="connected-section">
          <div className="account-info">
            <strong>Connected Account:</strong>
            <div className="account-address">
              {account}
            </div>
          </div>

          {contract && (
            <div className="contract-status">
              <strong>Contract Status:</strong> 
              <span className="contract-connected">✅ Connected</span>
              {isOwner && (
                <div className="owner-badge">
                  👑 You are the contract owner
                </div>
              )}
            </div>
          )}

          <button
            onClick={disconnectWallet}
            className="disconnect-button"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

export default WalletConnector;