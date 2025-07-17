import React, { useState } from 'react';
import VotingSelector from './components/pages/VotingSelector.jsx'
import VotePage from './components/pages/VotePage.jsx'
import HomePage from './components/pages/HomePage.jsx'
import Navbar from './components/elements/Navbar.jsx'
import Footer from './components/elements/Footer.jsx'

import './styles/App.css'


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVote, setSelectedVote] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  
  const connectWallet = async () => {
    // Mock wallet connection - replace with actual Web3 logic
    setIsWalletConnected(true);
  };
  
  const handleVoteSelect = (vote) => {
    setSelectedVote(vote);
    setCurrentPage('vote');
  };
  
  const handleBackToVoting = () => {
    setSelectedVote(null);
    setCurrentPage('voting');
  };
  
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'voting':
        return <VotingSelector onVoteSelect={handleVoteSelect} />;
      case 'vote':
        return <VotePage vote={selectedVote} onBack={handleBackToVoting} />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="app">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isWalletConnected={isWalletConnected}
        connectWallet={connectWallet}
      />
      
      <main className="main-content">
        {renderCurrentPage()}
      </main>
      
      <Footer /> 
      </div>
      );
  };

export default App;