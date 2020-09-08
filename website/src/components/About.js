import React from "react";
import "../css-files/About.css";
import margaux from "../images/margaux";
import rose from "../images/rose";

function About() {
  return (
    <div className="aboutSection">
      <div>
        <p className="aboutText">
          4 Hands Food Studio are producers of naturally fermented foods and
          drinks. Sourcing the best produce, to make the highest quality
          product!
          <br />
          Our sustainable thinking is guided by the principles set in place for
          their regenerative business model.
          <br />4 Hands Food Studio's pop-up dinners have been hailed as{" "}
          <a href="https://www.irishtimes.com/life-and-style/food-and-drink/restaurant-reviews/review-the-best-pop-up-restaurant-in-ireland-1.4194051">
            "the best pop-up restaurant in Ireland" by the Irish Times.
          </a>
          <br />4 Hands was founded by Rose Greene and Margaux Dejardin in 2018,
          in Rathaspick, Ireland.
        </p>
      </div>

      <div className="divWithRoseAndMargaux">
        <div className="margauxOrRoseDiv">
          <img src={margaux} alt="" />
          <p>
            Margaux Dejardin. <br />
            Co-Founder of 4 Hands Food Studio.
          </p>{" "}
        </div>
        <div className="margauxOrRoseDiv">
          <img src={rose} alt="" />
          <p>
            Rose Greene. <br />
            Co-Founder, 4 Hands Food Studio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
