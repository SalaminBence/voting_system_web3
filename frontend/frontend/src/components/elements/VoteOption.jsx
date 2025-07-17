import '../../styles/styles.css';

const VoteOption = ({ option, votes, totalVotes, onVote, isSelected }) => {
  const percentage = totalVotes > 0 ? (votes / totalVotes) * 100 : 0;
  
  return (
    <div className={`vote-option ${isSelected ? 'selected' : ''}`} onClick={() => onVote(option)}>
      <div className="option-header">
        <h4>{option}</h4>
        <span className="vote-count">{votes} votes</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="percentage">{percentage.toFixed(1)}%</span>
    </div>
  );
};

export default VoteOption;