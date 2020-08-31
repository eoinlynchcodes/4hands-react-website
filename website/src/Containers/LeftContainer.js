import React from "react";
import "../css-files/LeftContainer.css";
import kimchi from "../images/kimchi";

function LeftContainer() {
  return (
    <div>
      <div className="leftContainer">
        <section className="blackSegment">
          <h3>Products</h3>
        </section>

        {/* <img src={kimchi} /> */}
        <p>
          <i>
            "To live in a world where nature comes first, where we as humans see
            ourselves of part of nature, not above it. To see all peoples open
            to receive the goodness our natural surroundings have to offer,
            showing respect and gratitude for how lucky we are to live in a
            world which knows better how to care for itself than we ever could."
          </i>
        </p>

        <section className="productsSection">
          <div className="productDiv">
            <div className="blackSegment">
              <h3>Kimchi</h3>
            </div>
            <img src={kimchi} alt=""/>
            <div className="whiteSegment">
              <p>Text about Kombucha.</p>
            </div>
          </div>

          <div className="productDiv">
            <div className="blackSegment">
              <h3>Kimchi</h3>
            </div>
            <img src={kimchi} alt="" />
            <div className="whiteSegment">
              <p>Text about Kimchi.</p>
            </div>
          </div>

          <div className="productDiv">
            <div className="blackSegment">
              <h3>Kimchi</h3>
            </div>
            <img src={kimchi} alt=""/>
            <div className="whiteSegment">
              <p>Text about Kimchi.</p>
            </div>
          </div>

          <div className="productDiv">
            <div className="blackSegment">
              <h3>Kimchi</h3>
            </div>
            <img src={kimchi} alt=""/>
            <div className="whiteSegment">
              <p>Text about Kimchi.</p>
            </div>
          </div>
          <div className="productDiv">
            <div className="blackSegment">
              <h3>Kimchi</h3>
            </div>
            <img src={kimchi} alt=""/>
            <div className="whiteSegment">
              <p>Text about Kimchi.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="leftContainer">
        <div className="blackSegment">
          <h3>Vision</h3>
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
          <p>White Segment</p>
          <p>Menu goes here.</p>
        </div>
      </div>

      <div className="leftContainer">
        <div className="blackSegment">
          <h3>Blog</h3>
        </div>
        <div className="whiteSegment">
          <p>Blog goes here</p>
        </div>
      </div>

      <div>
      <p>Bring in the Newsletter Subscription here...</p>
      </div>

    </div>
  );
}

export default LeftContainer;
