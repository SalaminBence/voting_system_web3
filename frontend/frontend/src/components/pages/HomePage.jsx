import { Vote, Users, Shield} from 'lucide-react';
import '../../styles/styles.css';

// Home Page Component
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Decentralized Governance</h1>
          <p>Your voice matters. Participate in shaping the future of our protocol through transparent, on-chain voting.</p>
          <div className="hero-features">
            <div className="feature">
              <Shield className="feature-icon" />
              <span>Secure & Transparent</span>
            </div>
            <div className="feature">
              <Users className="feature-icon" />
              <span>Community Driven</span>
            </div>
            <div className="feature">
              <Vote className="feature-icon" />
              <span>On-Chain Voting</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="stats-section">
        <div className="stat-card">
          <h3>1,247</h3>
          <p>Active Voters</p>
        </div>
        <div className="stat-card">
          <h3>156</h3>
          <p>Proposals</p>
        </div>
        <div className="stat-card">
          <h3>$2.4M</h3>
          <p>Treasury</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;