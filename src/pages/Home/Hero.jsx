import { Link } from "react-router-dom";
import img_car from "../../assets/img/img_car.png";

export default function Hero() {
  return (
    <section className="wrapper" id="hero">
      <div className="container">
        <div className="left-col">
          <h1>Sewa & Rental Mobil Terbaik di kawasan Bekasi</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <button><Link to="/cars" className="btn-sewa">
              Mulai Sewa Mobil
          </Link></button>
        </div>
        <div className="right-col">
          <img src={img_car} alt="car"/>
        </div>
      </div>
    </section>
  );
}
