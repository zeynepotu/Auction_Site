import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';

function Home() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className='text-center'>Hayalindeki şeyleri burada bul!</h1>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h2>Öne Çıkan Ürünler</h2>
        </div>
        <hr/>
        <div className="col-md-4">
        <div className="card-container">
            <ProductImage title="Samsung XS MAX"
                image="https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2023/03/best_android_smartphone_uk_2023_phones.jpg?itok=3OQ-b5hG/150"
                bid={275}
                endTime="April 15, 2023 09:00:00"
                seller="Ayşe Yılmaz"/>

            </div>
        </div>
        <div className="col-md-4">
        <div className="card-container">
              <ProductImage
                title="Apple Galaxy S21"
                image="https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2022/06/best_android_phone_uk_2022_smartphones_nokia_c21_plus.jpg?itok=YWFeJ9h7"
                bid={350}
                endTime="April 20, 2023 09:00:00"
                seller="Çağla Öztürk"
              />
            </div>
          </div>
        <div className="col-md-4">
        <div className="card-container">
              <ProductImage
                title="Huawei POCO"
                image="https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2022/05/best_android_phone_-_realme_9_pro_plus.jpg?itok=CoPoH8V8"
                bid={500}
                endTime="April 25, 2023 09:00:00"
                seller="Ali Kaya"
                />
          </div>
        </div>
        </div>
        <hr/>
        <div className='col-md-12'><Link to="/login" className="btn btn-primary btn-lg">Hemen Keşfet</Link></div>
      </div>
  );
}

export default Home;
