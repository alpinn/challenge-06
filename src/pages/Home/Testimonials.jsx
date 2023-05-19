import peopleimg from './../../assets/img/org-pertama.png'
import peopleimg1 from './../../assets/img/org-ketiga.png'
import starimg from './../../assets/img/star.png'


export default function Testimonials() {
  return (
    <section className="wrapper" id="testimonial">
        <div className="testimonial-head">
            <h1>Testimonial</h1>
            <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div class="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={peopleimg} alt="first" className="profile-testimonial"/>
              <div className="testimonial-desc">
                <img src={starimg} alt="star"/>
                <img src={starimg} alt="star"/>
                <img src={starimg} alt="star"/>
                <img src={starimg} alt="star"/>
                <img src={starimg} alt="star"/>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <span>John Dee 32, Bromo</span>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={peopleimg1} alt="second" className="profile-testimonial"/>
              <div className="testimonial-desc">
                  <img src={starimg} alt="star"/>
                  <img src={starimg} alt="star"/>
                  <img src={starimg} alt="star"/>
                  <img src={starimg} alt="star"/>
                  <img src={starimg} alt="star"/>
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                  <span>John Dee 32, Bromo</span>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={peopleimg} alt="third" className="profile-testimonial"/>
              <div className="testimonial-desc">
                  <img src={starimg} alt="star"/>
                  <img src={starimg} alt="star"/>
                  <img src={starimg} alt="star"/>
                  <img src={starimg} alt="star"/>
                  <img src={starimg} alt="star"/>
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                  <span>John Dee 32, Bromo</span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-container">
          <div className="swiper-button-next">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </div>
      </section>
  );
}
