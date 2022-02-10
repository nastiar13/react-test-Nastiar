import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <p className="logo">Finsweet</p>
        <div className="links">
          <p className="nav-link">About Us</p>
          <p className="nav-link">Careers</p>
          <p className="nav-link">Services</p>
          <p className="nav-link">Blog</p>
          <p className="nav-link">Blog</p>
          <p className="nav-link">Contact Us</p>
          <button className="clone-project">Clone Project</button>
        </div>
      </nav>
      <section className="hero">
        <div className="heros-text">
          <h1 className="heros-title">
            Prosper with our <br />
            bestspoke solutions
          </h1>
          <p className="heros-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <div className="double-btn">
            <button className="btn btn-orange">See Our Services</button>
            <button className="btn btn-transparent">See All Services</button>
          </div>
          <p className="total-company">Work with 100+ Companies</p>
          <div className="triple-logo">
            <img loading="lazy" src="/assets/logo1.png" alt="" />
            <img loading="lazy" src="/assets/logo2.png" alt="" />
            <img loading="lazy" src="/assets/logo3.png" alt="" />
          </div>
        </div>
      </section>
      <section className="section1">
        <h1 className="section-title">
          We help more than 1500 <br />
          companies from all sectors
        </h1>
        <p className="heros-detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corporis
          harum nesciunt <br />
          Amet sapiente earum, animi perferendis laudantium dolores reiciendis
          porro <br />
          sunt quia fugiat.
        </p>
        <div className="card-list">
          <div className="card">
            <img
              loading="lazy"
              className="card-img"
              src="/assets/section11.png"
              alt=""
            />
            <h3 className="card-title">Business Strategy</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Nemo assumenda inventore aut deleniti et, doloremque quae at iure
              fugit.
            </p>
            <p className="learn-more">Learn More ⟶</p>
          </div>
          <div className="card">
            <img
              loading="lazy"
              className="card-img"
              src="/assets/section12.png"
              alt=""
            />
            <h3 className="card-title">Digitalization</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Nemo assumenda inventore aut deleniti et, doloremque quae at iure
              fugit.
            </p>
            <p className="learn-more">Learn More ⟶</p>
          </div>
          <div className="card">
            <img
              loading="lazy"
              className="card-img"
              src="/assets/section13.png"
              alt=""
            />
            <h3 className="card-title">Risk assessment</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Nemo assumenda inventore aut deleniti et, doloremque quae at iure
              fugit.
            </p>
            <p className="learn-more">Learn More ⟶</p>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="flex">
          <h3 className="title-sm">
            We are building software solution <br />
            that solves your business <br />
            challanges
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            <br />
            ipsa recusandae ipsam nam necessitatibus pariatur, deserunt, rerum
            <br />
            iste voluptate sed natus ratione aut voluptas.
          </p>
        </div>
        <div className="card-white-list">
          <div className="card">
            <img
              loading="lazy"
              className="card-logo"
              src="/assets/package.svg"
              alt=""
            />
            <h3 className="card-title">Invoicing</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisi
              <br />
              elit. Nemo assumenda inventore aut deleniti <br />
              quae at iure fugit.
            </p>
          </div>
          <div className="card">
            <img
              loading="lazy"
              className="card-logo"
              src="/assets/inbox.svg"
              alt=""
            />
            <h3 className="card-title">Support</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisi
              <br />
              elit. Nemo assumenda inventore aut deleniti <br />
              quae at iure fugit.
            </p>
          </div>
          <div className="card">
            <img
              loading="lazy"
              className="card-logo"
              src="/assets/gift.svg"
              alt=""
            />
            <h3 className="card-title">Surveying</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisi
              <br />
              elit. Nemo assumenda inventore aut deleniti <br />
              quae at iure fugit.
            </p>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="section3-left">
          <h1 className="section-title">
            The energy of a start-up <br />
            combined with 30 years <br />
            of experience.
          </h1>
          <p className="heros-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Eius corporis harum nesciunt Lorem consectetur adipisicing
            <br />
            corporis harum nesciunt elit. Eius ipsum
            <br />
            sapiente earum.
          </p>
          <div className="flex">
            <div className="flex-item">
              <h3 className="orange-title">15+</h3>
              <h3 className="flex-title">Award recieved</h3>
              <p className="flex-text">
                Lorem ipsum dolor sit ame
                <br />
                elit. Nemo assumenda in <br />
                quae at.
              </p>
            </div>
            <div className="flex-item">
              <h3 className="orange-title">500+</h3>
              <h3 className="flex-title">Client served</h3>
              <p className="flex-text">
                Lorem ipsum dolor sit ame
                <br />
                elit. Nemo assumenda in
                <br />
                quae at.
              </p>
            </div>
          </div>
        </div>
        <div className="section3-right">
          <div className="orange-transparent"></div>
        </div>
      </section>
      <section className="section4">
        <div className="btn-list">
          <button className="active">Business Strategy</button>
          <button className="inactive">Digitalization</button>
          <button className="inactive">Risk Assessment</button>
        </div>
        <div className="flex">
          <div className="section3-left">
            <h1 className="section-title">
              Helping clients with <br />
              research and strategy <br />
              for their business
            </h1>
            <p className="heros-detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Eius corporis harum nesciunt Lorem consectetur adipisicing
              <br />
              corporis harum nesciunt elit. Eius ipsum
              <br />
              sapiente earum.
            </p>
            <p className="heros-detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
              Obcaecati eligendi non tempore tenetur ipsam.
            </p>
            <p className="learn-more">See all services ⟶</p>
          </div>
          <div className="section4-right">
            <div className="orange-transparent"></div>
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="left"></div>
        <div className="right">
          <h5 className="white-title">
            Energy of a start-up <br />
            combined with 30 <br />
            years of experience.
          </h5>
          <button className="btn btn-text-orange">See Job Vacancies</button>
        </div>
      </section>
      <section className="section6">
        <div className="section6-left">
          <h1 className="section-title">
            Finsweet Was A Dream <br />
            To Work With
          </h1>
          <p className="heros-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Eius corporis harum nesciunt Lorem consectetur adipisicing
            <br />
            corporis harum nesciunt elit. Eius ipsum sapiente.
          </p>
          <div className="user-set">
            <img
              loading="lazy"
              className="img-rounded"
              src="/assets/profile-pic.png"
              alt=""
            />
            <div className="user-name">
              <p className="name">Chikelu Neo</p>
              <p className="as">CEO at MazeAi</p>
            </div>
          </div>
        </div>
        <div className="section6-right">
          <div className="play-btn">
            <div className="rounded">
              <img loading="lazy" src="/assets/play.svg" alt="" />
            </div>
            <p className="play">Play Video</p>
          </div>
        </div>
      </section>
      <section className="section7">
        <h1 style={{ marginBottom: '3rem' }} className="section-title">
          Latest Blog & News
        </h1>

        <div className="card-list">
          <div className="card">
            <img
              loading="lazy"
              className="card-img"
              src="/assets/section11.png"
              alt=""
            />
            <h3 className="card-title">
              Why you have to digitalize in <br /> 2021
            </h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Nemo assumenda inventore aut deleniti et, doloremque quae at iure
              fugit.
            </p>
            <p className="learn-more">Learn More ⟶</p>
          </div>
          <div className="card">
            <img
              loading="lazy"
              className="card-img"
              src="/assets/section12.png"
              alt=""
            />
            <h3 className="card-title">
              Our internal process and <br />
              longerm vision
            </h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Nemo assumenda inventore aut deleniti et, doloremque quae at iure
              fugit.
            </p>
            <p className="learn-more">Learn More ⟶</p>
          </div>
          <div className="card">
            <img
              loading="lazy"
              className="card-img"
              src="/assets/section13.png"
              alt=""
            />
            <h3 className="card-title">
              Helping the next generation <br />
              of leaders
            </h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Nemo assumenda inventore aut deleniti et, doloremque quae at iure
              fugit.
            </p>
            <p className="learn-more">Learn More ⟶</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="foot1">
          <p className="logo">Finsweet</p>
          <p className="bestspoke">
            Bestspoke software <br />
            solutions
          </p>
          <div className="soc-med-list">
            <img className="soc-med-logo" src="/assets/facebook.svg" alt="" />
            <img className="soc-med-logo" src="/assets/youtube.svg" alt="" />
            <img className="soc-med-logo" src="/assets/instagram.svg" alt="" />
            <img className="soc-med-logo" src="/assets/twitter.svg" alt="" />
          </div>
          <p className="copyright">© All rights reserved - Finsweet</p>
        </div>
        <div className="foot2">
          <p className="foot-title">Company</p>
          <p className="foot-item">About Us</p>
          <p className="foot-item">Careers</p>
          <p className="foot-item">Services</p>
          <p className="foot-item">Blog</p>
        </div>
        <div className="foot3">
          <p className="foot-title">Connect</p>
          <p className="foot-item">hi@finsweet.com</p>
          <p className="foot-item">+(123) 456-7890</p>
        </div>
        <div className="foot4">
          <p className="foot-title">Join Newsletter</p>
          <input type="email" placeholder="Type email here" />
          <button className="btn btn-sub">Subcribe</button>
          <div className="policy">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="left-orange"></div>
        <div className="right-orange"></div>
      </footer>
    </div>
  );
}

export default App;
