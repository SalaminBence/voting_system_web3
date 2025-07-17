import '../../styles/styles.css';

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Voting Web3</h3>
          <p>Decentralized governance for the future</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#github">GitHub</a></li>
            <li><a href="#discord">Discord</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Security</h4>
          <p>Audited by leading security firms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;