import { Wallet, Vote } from 'lucide-react';
import '../../styles/styles.css';
import WalletConnector from './WalletConnector';

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage, isWalletConnected}) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Vote className="brand-icon" />
          <span>Voting Web3</span>
        </div>
        
        <div className="nav-links">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'voting' ? 'active' : ''}`}
            onClick={() => setCurrentPage('voting')}
          >
            Voting
          </button>
        </div>
        
        <div className="wallet-section">
          {isWalletConnected ? (
            <div className="wallet-connected">
              <Wallet className="wallet-icon" /> Connected
            </div>
          ) : (
            <div className="connect-wallet-btn">
              <Wallet className="wallet-icon" />
              <WalletConnector className="wallet-icon" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;