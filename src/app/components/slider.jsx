"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../public/css/slider.css";
import slide_1 from "../../../public/images/Screenshot 2025-03-17 145411.jpg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPrescriptionBottle } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons/faHeartPulse";

const slides = [
  {
    image:
      "https://rukminim2.flixcart.com/image/850/1000/k8ait8w0/poster/e/q/6/medium-gym-boy-poster-poster-for-decoration-decorative-poster-original-imafqcc4usxchvgd.jpeg?q=90&crop=false",
    title: "BE STRONG TRAINING HARD ",
    description: "shape Your Body.",
  },
  {
    image: "https://wallpapercave.com/wp/wp7353763.jpg",
    title: "Pain is temporary. Pride is forever.",
    description:
      "Strength is the product of struggle, you must do what others don't to achieve what others won't",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6inbRNszyhKkHpdFAhTMryD7jpOUhvmP2k9ZaSGOFF2temQrppI1AE5Kt-Kt1T4IKDbg&usqp=CAU",
    title: "Success starts with self-discipline",
    description: "The body achieves what the mind believes.",
  },
];

const ResponsiveSlider = () => {
  return (
    <>
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="swiper-container"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="slide-content">
                <div className="text-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                <div className="image-content">
                  <img src={slide.image} alt={`Slide ${index + 1}`} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*  card ---------------------------------------------card ---------------------- */}

      <div className="heading_card">
        <h3>Why chose us?</h3>
        <h1>PUSH YOUR LIMITS FORWARD</h1>
      </div>
      <section className="card_sections">
        <div className="container_card">
          <div className="card">
            \
            <FontAwesomeIcon icon={faDumbbell} size="2x" className="Icons" />
            <div className="card-content">
              <h3>Modern equipment</h3>
              <p>Some description about this card.</p>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon
              icon={faPrescriptionBottle}
              size="2x"
              className="Icons"
            />
            ;
            <div className="card-content">
              <h3>Healthy nutrition plan</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut dolore facilisis.
              </p>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon
              icon={faHandshakeAngle}
              size="2x"
              className="Icons"
            />
            ;
            <div className="card-content">
              <h3>Professional training plan</h3>
              <p>Some description about this card.</p>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon
              icon={faPersonBiking}
              size="2x"
              className="Icons"
            />
            ;
            <div className="card-content">
              <h3>Unique to your needs</h3>
              <p>Some description about this card.</p>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faHeartPulse} size="2x" className="Icons" />
            <div className="card-content">
              <h3>healthier lifestyle</h3>
              <p>
                More than just working out! It’s about a healthier lifestyle
                🏋️‍♂️🥗🧠.
              </p>
            </div>
          </div>
          <div className="card">
            <FontAwesomeIcon
              icon={faPersonRunning}
              size="2x"
              className="Icons"
            />
            ;
            <div className="card-content">
              <h3>Gym-Goers</h3>
              <p>
                Protein Powder (Whey, Casein, Plant-Based) – Helps muscle
                recovery and growth. 🔹 Creatine – Improves strength and energy
                during workouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------thirdd car sections  */}
      <div className="heading_card">
        <h3>Our classNames</h3>
        <h1>WHAT WE CAN OFFER</h1>
      </div>
      <section className="section_two">
        <div className="card_second">
          <img
            src="https://youfit.com/wp-content/uploads/2022/09/cardio-workouts-at-the-gym.png"
            alt="Image"
          />
          <div className="card-content_2">
            <h3>Cardio</h3>
            <p>Strength</p>
            <a href="#" className="arrow-btn">
              →
            </a>
          </div>
        </div>
        <div className="card_second">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqNxjlHg-olFj6awGBlfiZ32xOVQzAGes4w&s"
            alt="Image"
          />
          <div className="card-content_2">
            <h3>Weightlifting</h3>
            <p>Strength.</p>
            <a href="#" className="arrow-btn">
              →
            </a>
          </div>
        </div>
        <div className="card_second">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26Kn6YUpdsapPNbyhJUD0odOU8_m_fus8tg&s"
            alt="Image"
          />
          <div className="card-content_2">
            <h3>Personal Training (P.T)</h3>
            <p>Strength.Kettlebell power</p>
            <a href="#" className="arrow-btn">
              →
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------section 3 */}
      <section className="slider_image_3">
        <div className="slider_image">
          <div className="slider-wrapper_3">
            <div className="card-image_slide">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJ-f-2ElJGoagA3nWkNdK8X-E71KEEQbOtQ&s"
                alt="Image 1"
              />
              <div className="overlay">
                Harish WanKheede <br />
              </div>
            </div>
            <div className="card-image_slide">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8b5arOIWWvnGuK_tUS74XyueY3h2A6rchC62mpqCFSJlmHprQz2TgTECah8FLhmopSWE&usqp=CAU" alt="Image 2" />
              <div className="overlay">Avish</div>
            </div>
            <div className="card-image_slide">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERapL8Z_k_3EiJIyBUS4ipNoBZjZikU6p50Re4Aeum3ZdyTp1d2cWR61SQGe-26vxHQ4&usqp=CAU" alt="Image 3" />
              <div className="overlay">Bhola</div>
            </div>
            <div className="card-image_slide">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJ1DqUZaioVKpQjRd-iTrP5n28MfY0ioEiA&s" alt="Image 4" />
              <div className="overlay">Vivek</div>
            </div>
      
          </div>
        </div>
      </section>

      {/* this is address and email sections 
--------------------------------------------------- */}
      <h1 className="Gym_plan_heading">Choose your pricing plan</h1>

      <section className="Gym_plan">
        <div className="card-container">
          <div className="card_plan">
            <h3>Strength Package</h3>
            <br />
            <p>
              {" "}
              Yearly = 4800 <br /> <br />
              Half Yearly = 2800 <br /> <br />
              Quarterly (90 Days) = 1600 <br /> <br />
              Monthly (30 Days) = 700 <br /> <br />
              Couple Yearly = 700 <br /> <br />
            </p>
            <div className="layers">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card_plan">
            <h3>Strength + Cardio </h3>
            <br />
            <p>
              Yearly = 6000 <br /> <br />
              Half Yearly = 3500 <br /> <br />
              Quarterly (90 Days) = 2000 <br /> <br />
              Monthly (30 Days) = 900 <br /> <br />
              Couple Yearly = 9500 <br /> <br />
            </p>
            <div className="layers">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card_plan">
            <h3> Personal Training</h3>
            <br />
            <p>
              * Yearly = 18000 <br /> <br />
              * Half Yearly = 9000 <br /> <br />
              * Quarterly (90 Days) = 5600 <br /> <br />
              * Monthly (30 Days) = 2000 <br /> <br />
              * Couple Yearly = 25000 <br /> <br />
            </p>
            <div className="layers">
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
      </section>
      {/* card sections  -----------------------------------------------------------------------------------------*/}
      
      {/* contact --------------------------------------------------------------------------------------------------------- */}
      <section className="contact_sections">
        <div className="background">
          <div className="contact_container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>CONTACT</span>
                    <span>US</span>
                  </div>
                  <div className="app-contact">
                    CONTACT INFO : +62 81 314 928 595
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="NAME" />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="EMAIL" />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="CONTACT NO"
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        className="app-form-control"
                        placeholder="MESSAGE"
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button">CANCEL</button> &nbsp;
                      <button className="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* card sections  */}

      {/* this is address and email sections 
--------------------------------------------------------------------------------------------------------------------------- */}
      <section className="address_container">
        <div className="card-container_data">
          <div className="card_data">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="2x"
              className="logo_data"
            />
            <div className="card-content">
              <p>
                <strong>Address:</strong> 123 Aamravti road  Multai
              </p>
            </div>
          </div>
          <div className="card_data">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              size="2x"
              className="logo_data"
            />

            <div className="card-content">
              <p>
                <strong>Mobile:</strong> +9876543210
              </p>
            </div>
          </div>
          <div className="card_data">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="logo_data"
            />

            <div className="card-content">
              <p>
                <strong>Email:</strong> support@email.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResponsiveSlider;
