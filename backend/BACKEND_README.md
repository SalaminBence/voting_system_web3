# Voting System

Simple voting system.

## Setup

```bash
npm install
npm run compile
npm test
npm run deploy
```

## Functions

- `addProposal(title, description)` - Add proposal (owner only)
- `vote(index)` - Vote on proposal
- `getProposal(index)` - Get proposal details
- `getProposalCount()` - Get total proposals

## Example

```solidity
votingSystem.addProposal("Question", "Description");
votingSystem.vote(0);
``` 