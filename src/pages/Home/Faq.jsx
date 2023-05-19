export default function Faq() {
  return (
    <section className="wrapper faq-section" id="faq">
        <div className="faq-title">
            <h1>Frequently Asked Question</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="accordion w-50" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Apa saja syarat yang dibutuhkan?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto repudiandae id. Cupiditate possimus eaque, harum cum quaerat culpa libero consequuntur expedita doloribus aut officiis. Recusandae nisi sapiente commodi culpa?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Berapa hari minimal sewa mobil lepas kunci?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis ad exercitationem? Illum, eligendi laborum ratione sit dolore eaque, itaque inventore mollitia alias non placeat ipsa quod perferendis natus error?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam accusantium ipsam itaque neque porro labore hic, id eligendi veniam consequatur vitae obcaecati accusamus quia minus deserunt odit praesentium pariatur quam.
              </div>
            </div>
          </div>
          <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam accusantium ipsam itaque neque porro labore hic, id eligendi veniam consequatur vitae obcaecati accusamus quia minus deserunt odit praesentium pariatur quam.
                </div>
              </div>
          </div>
          <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam accusantium ipsam itaque neque porro labore hic, id eligendi veniam consequatur vitae obcaecati accusamus quia minus deserunt odit praesentium pariatur quam.
                </div>
              </div>
          </div>
        </div>
      </section>
  );
}
