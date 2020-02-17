import React, { Component, Fragment } from "react";
import "./sass/main.scss"; //引入当前文件scss
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faTrophy,
  faMapPin,
  faKey,
  faHandsHelping,
  faLock,
  faHeart,
  faUsers,
  faExpand,
  faCoins
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="sidebar">
            <button className="nav-btn"></button>
          </div>
          <div className="header">
            <img src="./img/logo.png" alt="logo" class="header__logo" />
            <h3 class="heading-3">Your own home:</h3>
            <h1 class="heading-1">The ultimate personal freedom</h1>
            <button class="btn header__btn">View our properties</button>
            <div class="header__seenon-text">Seen on</div>
            <div class="header__seenon-logos">
              <img src="./img/logo-bbc.png" alt="bbc" />
              <img src="./img/logo-forbes.png" alt="forbes" />
              <img src="./img/logo-techcrunch.png" alt="te" />
              <img src="./img/logo-bi.png" alt="bi" />
            </div>
          </div>
          <div className="realtors">
            <h3 class="heading-3">Top 3 realtors</h3>
            <div class="realtors__list">
              <img
                src="./img/realtor-1.jpeg"
                alt="Realtor1"
                class="realtors__img"
              />
              <div class="realtor__details">
                <h4 class="heading-4 heading-4--light">Erik Feinman</h4>
                <p class="realtors__sold">245 house sold</p>
              </div>

              <img
                src="./img/realtor-2.jpeg"
                alt="Realtor2"
                class="realtors__img"
              />
              <div class="realtor__details">
                <h4 class="heading-4 heading-4--light">Kim Brown</h4>
                <p class="realtors__sold">212 house sold</p>
              </div>

              <img
                src="./img/realtor-3.jpeg"
                alt="Realtor3"
                class="realtors__img"
              />
              <div class="realtor__details">
                <h4 class="heading-4 heading-4--light">Toby Ramsey</h4>
                <p class="realtors__sold">198 house sold</p>
              </div>
            </div>
          </div>
          <section className="features">
            <div className="feature">
              <FontAwesomeIcon className="feature__icon" icon={faGlobe} />
              <h4 className="heading-4 heading-4--dark">
                World's best luxury homes
              </h4>
              <div className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur distinctio necessitatibus pariatur voluptatibus.
              </div>
            </div>
            <div className="feature">
              <FontAwesomeIcon className="feature__icon" icon={faTrophy} />
              <h4 className="heading-4 heading-4--dark">
                Only the best properties
              </h4>
              <div className="feature__text">
                Voluptatum mollitia quae. Vero ipsum sapiente molestias
                accusamus rerum sed a eligendi aut quia.
              </div>
            </div>
            <div className="feature">
              <FontAwesomeIcon className="feature__icon" icon={faMapPin} />
              <h4 className="heading-4 heading-4--dark">
                All homes in top locations
              </h4>
              <div className="feature__text">
                Tenetur distinctio necessitatibus pariatur voluptatibus quidem
                consequatur harum.
              </div>
            </div>
            <div className="feature">
              <FontAwesomeIcon className="feature__icon" icon={faKey} />
              <h4 className="heading-4 heading-4--dark">
                New home in one week
              </h4>
              <div className="feature__text">
                Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="feature">
              <FontAwesomeIcon
                className="feature__icon"
                icon={faHandsHelping}
              />
              <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
              <div className="feature__text">
                Quidem consequatur harum, voluptatum mollitia quae. Tenetur
                distinctio necessitatibus pariatur voluptatibus.
              </div>
            </div>
            <div className="feature">
              <FontAwesomeIcon className="feature__icon" icon={faLock} />
              <h4 className="heading-4 heading-4--dark">
                Secure payment on Nexter
              </h4>
              <div className="feature__text">
                Pariatur voluptatibus quidem consequatur harum, voluptatum
                mollitia quae.
              </div>
            </div>
          </section>
          <div className="story__pictures">
            <div class="composition">
              <img
                src="./img/gal-1.jpeg"
                alt="Photo1"
                class="composition-photo composition-photo--p1"
              />
              <img
                src="./img/story-2.jpeg"
                alt="Photo2"
                class="composition-photo composition-photo--p2"
              />
              <img
                src="./img/story-1.jpeg"
                alt="Photo3"
                class="composition-photo composition-photo--p3"
              />
            </div>
          </div>
          <div className="story__content">
            <h3 class="heading-3 mb-sm">Happy Customers</h3>
            <h2 class="heading-2 heading-2--dark">
              &ldquo;The best deciision of our lives&rdquo;
            </h2>
            <p class="story__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus. Quidem
              consequatur harum volupta!
            </p>
            <button class="btn">Find your own home</button>
          </div>
          <section className="homes">
            <div class="home">
              <img src="./img/house-1.jpeg" alt="House1" class="home__img" />
              <FontAwesomeIcon className="home__like" icon={faHeart} />
              <h5 class="home__name">Beatuiful Familiy House</h5>
              <div class="home__location">
                <FontAwesomeIcon
                  className="home__location__icon"
                  icon={faMapPin}
                />
                <p>USA</p>
              </div>
              <div class="home__rooms">
                <FontAwesomeIcon className="home__rooms__icon" icon={faUsers} />
                <p>5 rooms</p>
              </div>
              <div class="home__area">
                <FontAwesomeIcon className="home__area__icon" icon={faExpand} />
                <p>
                  325 m<sup>2</sup>
                </p>
              </div>
              <div class="home__price">
                <FontAwesomeIcon className="home__price__icon" icon={faCoins} />
                <p>$1,200,000</p>
              </div>
              <button class="btn home__btn">Contact realtors</button>
            </div>

            <div class="home">
              <img src="./img/house-2.jpeg" alt="House2" class="home__img" />
              <FontAwesomeIcon className="home__like" icon={faHeart} />
              <h5 class="home__name">Modern Glass Villa</h5>
              <div class="home__location">
                <FontAwesomeIcon
                  className="home__location__icon"
                  icon={faMapPin}
                />
                <p>Canada</p>
              </div>
              <div class="home__rooms">
                <FontAwesomeIcon className="home__rooms__icon" icon={faUsers} />
                <p>6 rooms</p>
              </div>
              <div class="home__area">
                <FontAwesomeIcon className="home__area__icon" icon={faExpand} />
                <p>
                  450 m<sup>2</sup>
                </p>
              </div>
              <div class="home__price">
                <FontAwesomeIcon className="home__price__icon" icon={faCoins} />
                <p>$2,100,000</p>
              </div>
              <button class="btn home__btn">Contact realtors</button>
            </div>
            <div class="home">
              <img src="./img/house-3.jpeg" alt="House3" class="home__img" />
              <FontAwesomeIcon className="home__like" icon={faHeart} />
              <h5 class="home__name">Cozy Country House</h5>
              <div class="home__location">
                <FontAwesomeIcon
                  className="home__location__icon"
                  icon={faMapPin}
                />
                <p>UK</p>
              </div>
              <div class="home__rooms">
                <FontAwesomeIcon className="home__rooms__icon" icon={faUsers} />
                <p>4 rooms</p>
              </div>
              <div class="home__area">
                <FontAwesomeIcon className="home__area__icon" icon={faExpand} />
                <p>
                  250 m<sup>2</sup>
                </p>
              </div>
              <div class="home__price">
                <FontAwesomeIcon className="home__price__icon" icon={faCoins} />
                <p>$880,000</p>
              </div>
              <button class="btn home__btn">Contact realtors</button>
            </div>
            <div class="home">
              <img src="./img/house-4.jpeg" alt="House4" class="home__img" />
              <FontAwesomeIcon className="home__like" icon={faHeart} />
              <h5 class="home__name">Large Rustical Villa</h5>
              <div class="home__location">
                <FontAwesomeIcon
                  className="home__location__icon"
                  icon={faMapPin}
                />
                <p>Portugal</p>
              </div>
              <div class="home__rooms">
                <FontAwesomeIcon className="home__rooms__icon" icon={faUsers} />
                <p>6 rooms</p>
              </div>
              <div class="home__area">
                <FontAwesomeIcon className="home__area__icon" icon={faExpand} />
                <p>
                  480 m<sup>2</sup>
                </p>
              </div>
              <div class="home__price">
                <FontAwesomeIcon className="home__price__icon" icon={faCoins} />
                <p>$2,500,000</p>
              </div>
              <button class="btn home__btn">Contact realtors</button>
            </div>
            <div class="home">
              <img src="./img/house-5.jpeg" alt="House5" class="home__img" />
              <FontAwesomeIcon className="home__like" icon={faHeart} />
              <h5 class="home__name">Majestic Palace House</h5>
              <div class="home__location">
                <FontAwesomeIcon
                  className="home__location__icon"
                  icon={faMapPin}
                />
                <p>Germany</p>
              </div>
              <div class="home__rooms">
                <FontAwesomeIcon className="home__rooms__icon" icon={faUsers} />
                <p>18 rooms</p>
              </div>
              <div class="home__area">
                <FontAwesomeIcon className="home__area__icon" icon={faExpand} />
                <p>
                  4230 m<sup>2</sup>
                </p>
              </div>
              <div class="home__price">
                <FontAwesomeIcon className="home__price__icon" icon={faCoins} />
                <p>$9,500,000</p>
              </div>
              <button class="btn home__btn">Contact realtors</button>
            </div>
            <div class="home">
              <img src="./img/house-6.jpeg" alt="House6" class="home__img" />
              <FontAwesomeIcon className="home__like" icon={faHeart} />
              <h5 class="home__name">Modern Family Apartment</h5>
              <div class="home__location">
                <FontAwesomeIcon
                  className="home__location__icon"
                  icon={faMapPin}
                />
                <p>Italy</p>
              </div>
              <div class="home__rooms">
                <FontAwesomeIcon className="home__rooms__icon" icon={faUsers} />
                <p>3 rooms</p>
              </div>
              <div class="home__area">
                <FontAwesomeIcon className="home__area__icon" icon={faExpand} />
                <p>
                  180 m<sup>2</sup>
                </p>
              </div>
              <div class="home__price">
                <FontAwesomeIcon className="home__price__icon" icon={faCoins} />
                <p>$600,000</p>
              </div>
              <button class="btn home__btn">Contact realtors</button>
            </div>
          </section>
          <section className="gallery">
            <div class="gallery__item gallery__item--1">
              <img
                src="./img/gal-1.jpeg"
                alt="Gallery image 1"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--2">
              <img
                src="./img/gal-2.jpeg"
                alt="Gallery image 2"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--3">
              <img
                src="./img/gal-3.jpeg"
                alt="Gallery image 3"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--4">
              <img
                src="./img/gal-4.jpeg"
                alt="Gallery image 4"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--5">
              <img
                src="./img/gal-5.jpeg"
                alt="Gallery image 5"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--6">
              <img
                src="./img/gal-6.jpeg"
                alt="Gallery image 6"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--7">
              <img
                src="./img/gal-7.jpeg"
                alt="Gallery image 7"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--8">
              <img
                src="./img/gal-8.jpeg"
                alt="Gallery image 8"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--9">
              <img
                src="./img/gal-9.jpeg"
                alt="Gallery image 9"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--10">
              <img
                src="./img/gal-10.jpeg"
                alt="Gallery image 10"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--11">
              <img
                src="./img/gal-11.jpeg"
                alt="Gallery image 11"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--12">
              <img
                src="./img/gal-12.jpeg"
                alt="Gallery image 12"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--13">
              <img
                src="./img/gal-13.jpeg"
                alt="Gallery image 13"
                class="gallery__img"
              />
            </div>
            <div class="gallery__item gallery__item--14">
              <img
                src="./img/gal-14.jpeg"
                alt="Gallery image 14"
                class="gallery__img"
              />
            </div>
          </section>
          <footer className="footer">
            <ul class="nav">
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Find your dream home
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Request proposal
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Download home planner
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Contact us
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Submit your property
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Come work with us
                </a>
              </li>
            </ul>
            <p class="copyright">
              &copy; Copyright 2020 by Alan, Feel free to use this project for
              your own purposes. This does NOT apply if you plan to produce your
              own course of tutorials based on this project.
            </p>
          </footer>
          　　
        </div>
      </Fragment>
    );
  }
}
export default App;
