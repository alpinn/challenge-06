import img_service from "../../assets/img/img_service.png";

export default function OurServices() {
  return (
    <section className="wrapper" id="ourservice">
        <div className="container">
          <img src={img_service} alt="our-service" className="img-service"/>
          <div className="service-content">
            <h1>Best Car Rental for any kind of trip in Bekasi!</h1>
            <p className="service-desc">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <div className="service-desc--list">
              <i className="fa-solid fa-check check-btn"></i>
              <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </div>
            <div className="service-desc--list">
              <i className="fa-solid fa-check check-btn"></i>
              <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </div>
            <div className="service-desc--list">
                <i className="fa-solid fa-check check-btn"></i>
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="service-desc--list">
                <i className="fa-solid fa-check check-btn"></i>
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div className="service-desc--list">
                <i className="fa-solid fa-check check-btn"></i>
                <p>Layanan Airport Transfer / Drop In Out</p>
            </div>
          </div>
        </div>
      </section>
  );
}
