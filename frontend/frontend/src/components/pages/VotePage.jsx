import React, { useState} from 'react';
import VoteOption from '../elements/VoteOption.jsx'
import '../../styles/styles.css';

// Individual Vote Page Component
const VotePage = ({ vote, onBack }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  
  // Mock vote counts for demonstration
  const mockVoteCounts = {
    "Education Programs": 456,
    "Infrastructure": 321,
    "Marketing": 289,
    "Research": 181,
    "Approve All Changes": 567,
    "Approve Partial": 234,
    "Reject": 91,
    "Yes": 298,
    "No": 158
  };
  
  const handleVote = (option) => {
    if (!hasVoted) {
      setSelectedOption(option);
    }
  };
  
  const submitVote = () => {
    if (selectedOption) {
      setHasVoted(true);
      // Here you would interact with the smart contract
    }
  };
  
  const totalVotes = Object.values(mockVoteCounts).reduce((sum, count) => sum + count, 0);
  
  return (
    <div className="vote-page">
      <div className="vote-header-section">
        <button className="back-button" onClick={onBack}>← Back to Proposals</button>
        <h1>{vote.title}</h1>
        <p>{vote.description}</p>
      </div>
      
      <div className="vote-options-grid">
        {vote.options.map(option => (
          <VoteOption
            key={option}
            option={option}
            votes={mockVoteCounts[option] || 0}
            totalVotes={totalVotes}
            onVote={handleVote}
            isSelected={selectedOption === option}
          />
        ))}
      </div>
      
      {!hasVoted && (
        <div className="vote-actions">
          <button 
            className="submit-vote-btn"
            onClick={submitVote}
            disabled={!selectedOption}
          >
            Submit Vote
          </button>
        </div>
      )}
      
      {hasVoted && (
        <div className="vote-success">
          <h3>Vote Submitted Successfully!</h3>
          <p>Your vote for "{selectedOption}" has been recorded on the blockchain.</p>
        </div>
      )}
    </div>
  );
};

export default VotePage;