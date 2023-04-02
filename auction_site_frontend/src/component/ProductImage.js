function ProductImage (props){
  
  
    return (
      <div className="card">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>Current Bid: {props.bid}$</p>
        <p>Auction Ends: {props.endTime}</p>
        <p>Seller: {props.seller}</p>
      </div>
    );
}
  export default ProductImage;
