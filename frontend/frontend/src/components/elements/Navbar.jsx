import { Wallet, Vote } from 'lucide-react';
import '../../styles/styles.css';

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage, isWalletConnected, connectWallet }) => {
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
        
        //insert connection here
        <div className="wallet-section">
          {isWalletConnected ? (
            <div className="wallet-connected">
              <Wallet className="wallet-icon" />
              <span>0x1234...5678</span>
            </div>
          ) : (
            <button className="connect-wallet-btn" onClick={connectWallet}>
              <Wallet className="wallet-icon" />
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;