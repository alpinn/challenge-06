import { Link } from "react-router-dom";

export default function SewaMobil() {
  return (
    <section id="sewamobil">
      <div className="banner">
        <div className="banner-desc">
            <h1>Sewa Mobil di Bekasi Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button><Link to="/cars" className="btn-sewa">
              Mulai Sewa Mobil
          </Link></button>
        </div>
      </div>
    </section>
  );
}
