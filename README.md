# Event Management with NFT-based Registration

This project implements a smart contract system for event management with NFT-based registration. It consists of two main contracts: `EventContract` and `Sliders` (NFT).

## Contracts

### EventContract

The `EventContract` manages event creation, registration, and attendee tracking.

#### Key Features:

- Create events (owner only)
- Register for events (requires NFT ownership)
- View event attendees
- Check registration status
- List all events

#### Main Functions:

- `createEvent`: Create a new event (owner only)
- `registerForEvent`: Register for an event (requires NFT)
- `getAttendees`: Get list of attendees for an event
- `checkUserRegistration`: Check if a user is registered for an event
- `getEvents`: Get list of all events

### Sliders (NFT)

The `Sliders` contract is an ERC721 token used for event registration.

#### Key Features:

- Mint new NFTs
- ERC721 standard compliant

#### Main Functions:

- `mintNFT`: Mint a new NFT with a specified tokenURI

## Usage

1. Deploy the `Sliders` NFT contract
2. Deploy the `EventContract`, passing the `Sliders` contract address
3. Mint NFTs to users who should be able to register for events
4. Use `EventContract` to create and manage events

## Security Considerations

- Only the contract owner can create events
- Users must own at least one NFT to register for events
- Users can only register once per event
- Events have a duration and completion status

## Development

This project uses Solidity ^0.8.24 and OpenZeppelin contracts. Ensure you have the necessary development environment set up for Ethereum smart contract development.

# Addresses

Deploying contracts with the account: 0xf1bEAAb3D518994d74248f01b862E9E01534d91D
MyNFT deployed to: 0xbF7CE61Bb57c3F61238c67FdD0c0939C0e5182F3
MyEventT deployed to: 0xA52c34C0b50D9cdEc5fa4f07335C05291e67Ba2e

Successfully submitted source code for contract
contracts/Nft.sol:Sliders at 0xbF7CE61Bb57c3F61238c67FdD0c0939C0e5182F3
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Sliders on the block explorer.
https://sepolia-blockscout.lisk.com/address/0xbF7CE61Bb57c3F61238c67FdD0c0939C0e5182F3#code

Successfully submitted source code for contract
contracts/Event.sol:EventContract at 0xA52c34C0b50D9cdEc5fa4f07335C05291e67Ba2e
for verification on the block explorer. Waiting for verification result...

Successfully verified contract EventContract on the block explorer.
https://sepolia-blockscout.lisk.com/address/0xA52c34C0b50D9cdEc5fa4f07335C05291e67Ba2e#code

## License

See LICENSE file for details.
