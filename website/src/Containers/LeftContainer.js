import React, { useState } from "react";
// import { useHistory } from 'react-router-dom'
import "../css-files/LeftContainer.css";
import { Button } from "@material-ui/core";
import kimchi from "../images/kimchi";
import kombucha from "../images/kombucha";
import axios from "axios";
import MenuContainer from "./MenuCaller";
import takeaway from "../images/takeaway";
import whitekraut from "../images/whitekraut";
import redkraut from "../images/redkraut";
import rose from "../images/rose";
import margaux from "../images/margaux";
import products from '../data/products';

function LeftContainer() {

  const [formData, setFormData] = useState("");
  const [productData] = useState(products);

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://gmail.us19.list-manage.com/subscribe/post?u=5f345ee5b52850316f8e104b4&amp;id=e9b9605d2b",
        formData
      )
      .then((response) => {
        // history.push("https://gmail.us19.list-manage.com/subscribe/post?u=5f345ee5b52850316f8e104b4&amp;id=e9b9605d2b");
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div>
      <div className="leftContainer space">
        <section id="products" className="blackSegment">
          <h3>Products</h3>
        </section>

        <section className="productsSection">
          <div className="productDiv">
            <img src={kombucha} alt="" />
            <h3>
              <u>Kombucha</u>
            </h3>
            <p className="productText">
            Kombucha is a naturally fermented soda style drink made using tea as a main, filled with
beneficial bacteria, supporting gut health, giving you a range of natural probiotics..
            </p>
            <div className="whiteSegment">
              <button className="curiousButton">Curious?</button>
              <button className="addButton">Add to Basket</button>
            </div>
          </div>

          <div className="productDiv">
            <img src={whitekraut} alt="" />
            <h3>
              <u>White Saeurkraut</u>
            </h3>
            <p className="productText">

              </p>
            <div className="whiteSegment">
              <button className="curiousButton">Curious?</button>
              <button className="addButton">Add to Basket</button>
            </div>
          </div>

          <div className="productDiv">
            <img src={redkraut} alt="" />
            <h3>
              <u>Red Sauerkraut</u>
            </h3>
            <div className="whiteSegment">
              <button className="curiousButton">Curious?</button>
              <button className="addButton">Add to Basket</button>
            </div>
          </div>

          <div className="productDiv">
            <img src={kimchi} alt="" />
            <h3>
              <u>Apple Cider and Rosehip Vinegar</u>
            </h3>
            <p className="productText">
            Our naturally fermented raw vinegar is made using a base of freshly juiced apples, which we ferment
into cider, and in turn into vinegar. Rosehips are foraged locally in season, adding medicinal benefits
along with a delicate fruity flavour.
            </p>
            <div className="whiteSegment">
              <button className="curiousButton">Curious?</button>
              <button className="addButton">Add to Basket</button>
            </div>
          </div>

          <div className="productDiv">
            <img src={kimchi} alt="" />
            <h3>
              <u>Probiotic Juice</u>
            </h3>
              <p className="productText">Our innovative probiotic juice is made with health and wellbeing in mind. Taken daily our probiotic
juice is the ideal way to get an adequate dose of natural probiotics into your system.</p>
            <div className="whiteSegment">
              <button className="curiousButton">Curious?</button>
              <button className="addButton">Add to Basket</button>
            </div>
          </div>
        </section>
      </div>
      <br />
      <hr />

      <div className="leftContainer space">
        <div className="blackSegment">
          <h3 className="blackSegment">Vision</h3>
        </div>
        <div className="whiteSegment">
          <p className="visionText">
            <i>
              "To live in a world where nature comes first, where we as humans
              see ourselves of part of nature, not above it. To see all peoples
              open to receive the goodness our natural surroundings have to
              offer, showing respect and gratitude for how lucky we are to live
              in a world which knows better how to care for itself than we ever
              could."
            </i>
            <br />
            <br />- Rose Greene & Margaux Dejardin, 4 Hands Food Studio
          </p>
        </div>
      </div>

      <hr />

      <div className="leftContainer space">
        <div id="takeaways" className="blackSegment ">
          <h3>Takeaways</h3>
        </div>
        <div className="takeawayDiv">
          <img src={takeaway} alt="" />
          <MenuContainer />
          <button className="orderButton">Order Friday's Takeaway</button>
        </div>
      </div>

      <hr />

      <div className="leftContainer space">
        <div id="blog" className="blackSegment">
          <h3>Blog</h3>
        </div>
        <div className="whiteSegment">
          <div
            // className="w3-justify"
            id="retainable-rss-embed"
            data-rss="https://medium.com/feed/@4handsf"
            data-maxcols="3"
            data-layout="grid"
            data-poststyle="inline"
            data-readmore="Read the rest..."
            data-button="btn btn-primary"
            data-offset="-100"
          ></div>
        </div>
      </div>
      <br />
      <hr />
      <br />

      <div className="leftContainer principles space">
        <div className="blackSegment">
          <h3>Our Principles</h3>
        </div>

        <ul>
          <li>Make the best product possible.</li> <hr />
          <li>Always strive to improve and innovate on every level.</li>
          <hr />
          <li>Nutrition is key.</li>
          <hr />
          <li>
            Connect with suppliers, continually control and monitor supply
            chain.
          </li>
          <hr />
          <li>Minimize the creation of waste.</li>
          <hr />
          <li>
            Assess the environmental outcome of any business decision before
            making it.
          </li>
          <hr />
          <li>Support and promote farmers that fit principles.</li>
          <hr />
          <li>Engage with and teach food citizens (customers).</li>
          <hr />
          <li>
            Continually push for the collective good giving better access to
            sustainable food to a maximum of people, while supporting
            biodiversity and regenerative agriculture.
          </li>
          <hr />
          <li>Lead by example.</li>
        </ul>
      </div>

      <hr />

      <div className="leftContainer space">
        <div className="blackSegment ">
          <h3>The People Behind 4 Hands Food Studio</h3>
        </div>
        <div className="aboutRoseAndMargaux">
          <img src={rose} alt="" />
          <div>
          <h3>Rose Greene, Co-Founder</h3>
          <p>
            Rose’s life has always orientated around food, studies in Culinary
            Arts led to cooking in a number of world renowned restaurants
            internationally. 
            <br/>
            <br/>
            She has always focused her career on produce, going
            to the source and supporting farmers while instilling the importance
            of providence to young budding cooks she mentored throughout her 15
            year career as a chef. 
            <br/>
            <br/>
            Always a curious mind, fermentation became a
            core of her work. Gaining an in-depth understanding of the health
            benefits of fermentation through collaboration with the microbiology
            department of Antwerp university, using her knowledge in natural
            fermentation to assist professors and PHD students in their studies.
          </p>
          </div>
        </div>
        <hr/>

        <div className="aboutRoseAndMargaux">
          <div>
          <h3>Margaux Dejardin, Co-Founder</h3>
          <p>
            Margaux’s French roots seen her raised with an appreciation of food
            culture, which followed her throughout her life as a simple
            pleasure. It was only later in life she decided to forge a career in
            her true passion, food. Having a great sensitivity to nature, and
            all living things, the core of her interest in food was leading the
            way in sustainable thinking and the betterment of our natural
            surroundings. Within Europe she gained an extensive knowledge in
            organic farming practices, working along side some amazing farming
            minds to develop her own growing style which she uses today.
            Wellbeing is also key to life, as she continually strives to
            increase her knowledge in medicinal plants and their uses. Together
            Rose and Margaux call upon their experience daily to help them
            achieve their goals as a leading sustainable food business.
          </p>
          </div>

          <img src={margaux} alt="" />
        </div>
      </div>

      <hr />

      <div className="leftContainer space">
        <div className="blackSegment">
          <h3>Subscribe to our Newsletter</h3>
        </div>
        <div className="formAndButton emailSignUpForm">
          <form onSubmit={(event) => handleSubmit(event)} className="emailSignUpForm">
         
            <button className="orderButton">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;
