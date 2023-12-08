import React, { useEffect } from "react";
import "./Footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop typeof="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a data-aos="fade-up" href="#" className="logo flex">
                <MdTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerPraragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linksGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Payment
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" className="linksGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Booking
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                TripAdvisor
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="5000" className="linksGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Indonesia
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small data-aos="fade-up">BEST TRAVEL WEBSITE THEME</small>
            <small data-aos="fade-up">COPYRIGHTS RESERVED - ISRATECH 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
