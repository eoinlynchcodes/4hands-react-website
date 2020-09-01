import React, { useState } from "react";
import "../css-files/LeftContainer.css";
import kimchi from "../images/kimchi";
import kombucha from '../images/kombucha';
import axios from 'axios';
import MenuContainer from './MenuCaller';

function LeftContainer() {  


  const[ formData, setFormData ] = useState("");

  const handleChange = event => {
    setFormData(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://gmail.us19.list-manage.com/subscribe/post?u=5f345ee5b52850316f8e104b4&amp;id=e9b9605d2b', formData)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div>
      <div className="leftContainer">
        <section className="blackSegment">
          <h3>Products</h3>
        </section>

        {/* Image can go here with text? */}

        <section className="productsSection">
          <div className="productDiv">
            <div className="blackSegment">
              <h3>Kombucha</h3>
            </div>
            <img src={kombucha} alt=""/>
            <div className="whiteSegment">
            <button>Curious?</button>
              <button>Add to Basket</button>            
              </div>
          </div>

          <div className="productDiv">
            <div className="blackSegment">
              <h3>Kimchi</h3>
            </div>
            <img src={kimchi} alt="" />
            <div className="whiteSegment">
              <button>Curious?</button>
              <button>Add to Basket</button>
            </div>
          </div>

          <div className="productDiv">
            <div className="blackSegment">
              <h3>Kimchi</h3>
            </div>
            <img src={kimchi} alt=""/>
            <div className="whiteSegment">
              <button>Curious?</button>
              <button>Add to Basket</button>
            </div>
          </div>

          <div className="productDiv">
            <div className="blackSegment">
              <h3>Kimchi</h3>
            </div>
            <img src={kimchi} alt=""/>
            <div className="whiteSegment">
              <button>Curious?</button>
              <button>Add to Basket</button>
            </div>
          </div>
          <div className="productDiv">
            <div className="blackSegment">
              <h3>Kimchi</h3>
            </div>
            <img src={kimchi} alt=""/>
            <div className="whiteSegment">
              <button>Curious?</button>
              <button>Add to Basket</button>
            </div>
          </div>
        </section>
      </div>

      <div className="leftContainer">
        <div className="blackSegment">
          <h3 className="blackSegment">Vision</h3>
        </div>
        <div className="whiteSegment">
          <p>
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

      <div className="leftContainer">
        <div className="blackSegment">
          <h3>Takeaways</h3>
        </div>
        <div className="whiteSegment">
          <MenuContainer/>
        </div>
      </div>

      <div className="leftContainer">
        <div className="blackSegment">
          <h3>Blog</h3>
        </div>
        <div className="whiteSegment">
          <div className="w3-justify" id="retainable-rss-embed" data-rss="https://medium.com/feed/@4handsf"
            data-maxcols="3" data-layout="grid" data-poststyle="inline" data-readmore="Read the rest..."
            data-button="btn btn-primary" data-offset="-100">
          </div>
        </div>
      </div>

      <div className="leftContainer">
        <form onSubmit={() => handleSubmit()} className="emailSignUpForm">
          <h3>Subscribe to our Newsletter</h3>
          <input 
          type="email"
          onChange={event => handleChange(event)}
          placeholder="your@email.com..." 
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LeftContainer;
