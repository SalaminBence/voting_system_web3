import { Users, ChevronRight } from 'lucide-react';
import '../../styles/styles.css';

// Vote Card Component
const VoteCard = ({ vote, onVoteClick }) => {
  const timeLeft = new Date(vote.endDate) - new Date();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
  
  return (
    <div className="vote-card" onClick={() => onVoteClick(vote)}>
      <div className="vote-header">
        <h3>{vote.title}</h3>
        <span className={`vote-status ${vote.status}`}>
          {vote.status === 'active' ? 'Active' : 'Ended'}
        </span>
      </div>
      
      <p className="vote-description">{vote.description}</p>
      
      <div className="vote-stats">
        <div className="stat">
          <Users className="stat-icon" />
          <span>{vote.totalVotes} votes</span>
        </div>
        <div className="stat">
          <span className="time-left">
            {daysLeft > 0 ? `${daysLeft} days left` : 'Ended'}
          </span>
        </div>
      </div>
      
      <div className="vote-card-footer">
        <ChevronRight className="arrow-icon" />
      </div>
    </div>
  );
} 
export default VoteCard;