import React,  {useEffect}from "react";
import "./Main.css";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'



//Let me paste the array named data

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, BoraBora is one of the best travel descriptionin the world. This place is known for its luxurious stays and adventurous activities.",
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned.",
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: "The Burj Khalifa",
    location: "Dubai",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The Burj Khalifa[a] (known as the Burj Dubai prior to its inauguration) is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest building.",
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley.",
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: "Hohenzollern Bridge",
    location: "Cologne",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "The Hohenzollern Bridge is a bridge crossing the river Rhine in the German city of Cologne. It crosses the Rhine at kilometre 688.5. Originally.",
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: "Ciaque Terre",
    location: "Liguria, Italy",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Cinque Terre is a string of centuries-old seaside villages on the rugged Italian Riviera coastline. In each of the 5 towns, colorful houses and vineyards.",
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Angkor Wat is a temple complex in Cambodia, located on a site measuring 162.6 hectares. The Guinness World Records considers it as the largest religious.",
  },
  {
    id:8,
    imgSrc: img8,
    destTitle: "St. Paul's Cathedral",
    location: "London",
    grade: "CULTURAL RELAX",
    fees: "$70",
    description:
      "TSt Paul's Cathedral is an Anglican cathedral in London, England, and is the seat of the Bishop of London. The cathedral serves as the mother church.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island.",
  },
];
const Main = () => {

  useEffect(()=>{
    Aos .init({duration: 2000})
}, [])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" 
        className="title">
          Most Visited destinations</h3>
      </div>

      <div className="secContent grid">
        {/* so guys, here we are going to use high ardfer array method(map).
        to do that we shall use a list of object in one array. I'm going to 
        create an array named data and from that we shall .map() array to
        fetch each desitnation at once. Ihope this will make sence to you! */}

        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id}
              data-aos="fade-up"
              className="singleDesitnation">
                <div className="inageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
