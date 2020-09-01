import React from "react";
import "../css-files/RightContainer.css";
import margaux from "../images/margaux";
import rose from "../images/rose";

function RightContainer() {
  return (
    <div>
      <div className="rightContainer">
        <div className="rightBlackSegment">
          <h3>About</h3>
        </div>

        <div className="rightWhiteSegment">
          <p className="inlineParagraph">
            4 Hands Food Studio are producers of naturally fermented foods and
            drinks. Sourcing the best produce, to make the highest quality
            product!
            <br />
            <br />
            4 Hands keeps to its sustainable thinking by the principles they set
            in place for their regenerative business model.
            <br />
            <br />
            4 Hands Food Studio's pop-up dinners have been hailed as "the best
            pop-up restaurant in Ireland" by the Irish Times.
            <br />
            <br />4 Hands was founded by Rose Greene and Margaux Dejardin in
            2018, in Rathaspick, Ireland.
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

        <div className="rightContainer">
          <div className="rightBlackSegment">
            <h3>Our Principles</h3>
          </div>

          <ul>
            <li>1. Make the best product possible.</li> <hr />
            <li>
              2. Always strive to improve and innovate on every level.
            </li>{" "}
            <hr />
            <li>3. Nutrition is key.</li> <hr />
            <li>
              4. Connect with suppliers, continually control and monitor supply
              chain.
            </li>{" "}
            <hr />
            <li>
              5. Minimize the creation of waste.
            </li>{" "}
            <hr />
            <li>
              6. Assess the environmental outcome of any business decision
              before making it.
            </li>{" "}
            <hr />
            <li>
              7. Support and promote farmers that fit principles.
            </li>{" "}
            <hr />
            <li>
              8. Engage with and teach food citizens (customers).
            </li><hr />
            <li>
              9. Continually push for the collective good, to give better access
              to sustainable food to a maximum of people, while supporting
              biodiversity and regenerative agriculture.
            </li><hr />
            <li>10. Lead by example.</li>
          </ul>
        </div>
      </div>
      <h1>RightContainer</h1>
    </div>
  );
}

export default RightContainer;
