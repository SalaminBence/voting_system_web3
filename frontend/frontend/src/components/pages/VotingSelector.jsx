import VoteCard from '../elements/VoteCard.jsx'
import '../../styles/styles.css';

// Mock data for demonstration
const mockVotes = [
  {
    id: 1,
    title: "Community Pool Allocation",
    description: "Decide how to allocate the community development fund",
    options: ["Education Programs", "Infrastructure", "Marketing", "Research"],
    endDate: "2025-07-25",
    totalVotes: 1247,
    status: "active"
  },
  {
    id: 2,
    title: "Protocol Upgrade v2.0",
    description: "Vote on the proposed protocol upgrade features",
    options: ["Approve All Changes", "Approve Partial", "Reject"],
    endDate: "2025-07-30",
    totalVotes: 892,
    status: "active"
  },
  {
    id: 3,
    title: "New Partnership Proposal",
    description: "Approve partnership with DeFi protocol",
    options: ["Yes", "No"],
    endDate: "2025-08-05",
    totalVotes: 456,
    status: "active"
  }
];

// Voting Page Component
const VotingSelector = ({ onVoteSelect }) => {
  return (
    <div className="voting-page">
      <div className="page-header">
        <h1>Active Proposals</h1>
        <p>Choose a proposal to cast your vote</p>
      </div>
      
      <div className="votes-grid">
        {mockVotes.map(vote => (
          <VoteCard key={vote.id} vote={vote} onVoteClick={onVoteSelect} />
        ))}
      </div>
    </div>
  );
};
export default VotingSelector;