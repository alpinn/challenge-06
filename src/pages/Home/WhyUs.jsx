export default function WhyUs() {
  return (
    <section className="wrapper" id="whyus">
        <div className="whyus-head">
          <h1>Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="card mb-3">
              <div className="card-body">
                <i className="fa-regular fa-thumbs-up whyus-btn"></i>
                <div className="card-content">
                  <h2>Mobil Lengkap</h2>
                  <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="card mb-3">
              <div className="card-body">
                <i className="fa-solid fa-tag whyus-btn"></i>
                <div className="card-content">
                  <h2>Harga Murah</h2>
                  <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="card mb-3">
              <div className="card-body">
                <i className="fa-regular fa-clock whyus-btn"></i>
                <div className="card-content">
                  <h2>Layanan 24 Jam</h2>
                  <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="card mb-3">
              <div className="card-body">
                <i className="fa-solid fa-user-tie whyus-btn"></i>
                <div className="card-content">
                  <h2>Sopir Profesional</h2>
                  <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
