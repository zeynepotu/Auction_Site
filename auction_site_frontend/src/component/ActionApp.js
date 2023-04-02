import React from "react";
import AuctionCard from "./AuctionCard";

const Auctions = () => {
  return (
    <div className="auction-app">
      <div className="container">
        <h1>Auction Items </h1>
        <hr />
        <div className="row">
          <div className="col-4">
            <div className="card-container">
              <AuctionCard
                title="Samsung XS MAX"
                image="https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2023/03/best_android_smartphone_uk_2023_phones.jpg?itok=3OQ-b5hG/150"
                startingBid={275}
                bidIncrement={50}
                endTime="April 15, 2023 09:00:00"
                seller="Ayşe Yılmaz"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="card-container">
              <AuctionCard
                title="Apple Galaxy S21"
                image="https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2022/06/best_android_phone_uk_2022_smartphones_nokia_c21_plus.jpg?itok=YWFeJ9h7"
                startingBid={350}
                bidIncrement={75}
                endTime="April 20, 2023 09:00:00"
                seller="Çağla Öztürk"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="card-container">
              <AuctionCard
                title="Huawei POCO"
                image="https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2022/05/best_android_phone_-_realme_9_pro_plus.jpg?itok=CoPoH8V8"
                startingBid={500}
                bidIncrement={100}
                endTime="April 25, 2023 09:00:00"
                seller="Ali Kaya"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Auctions;

