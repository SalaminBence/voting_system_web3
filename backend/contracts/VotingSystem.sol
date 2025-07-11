// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VotingSystem {
    struct Proposal {
        string title;
        string description;
        uint256 voteCount;
    }

    Proposal[] public proposals;
    mapping(address => mapping(uint256 => bool)) public voted;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function addProposal(string memory _title, string memory _description) public {
        require(msg.sender == owner, "Only owner can add proposals");
        proposals.push(Proposal(_title, _description, 0));
    }

    function vote(uint256 _proposalIndex) public {
        require(_proposalIndex < proposals.length, "Invalid proposal");
        require(!voted[msg.sender][_proposalIndex], "Already voted");
        
        voted[msg.sender][_proposalIndex] = true;
        proposals[_proposalIndex].voteCount++;
    }

    function getProposal(uint256 _index) public view returns (string memory, string memory, uint256) {
        require(_index < proposals.length, "Invalid index");
        Proposal memory p = proposals[_index];
        return (p.title, p.description, p.voteCount);
    }

    function getProposalCount() public view returns (uint256) {
        return proposals.length;
    }
} 