import {useState} from "react";
function AuctionCard(props) {
    const [currentBid, setCurrentBid] = useState(props.startingBid);
  
    const handleBid = () => {
      setCurrentBid(currentBid + props.bidIncrement);
    };
  
    return (
      <div className="card">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>Current Bid: ${currentBid}</p>
        <button onClick={handleBid}>Place Bid</button>
        <p>Auction Ends: {props.endTime}</p>
        <p>Seller: {props.seller}</p>
      </div>
    );
  }export default AuctionCard;