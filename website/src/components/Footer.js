import React from "react";
import "../css-files/Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <section className="socialMedia">
          <div>
            <p>Follow us:</p>
            <div className="mediaFlex">
              <a
                href="https://www.instagram.com/4hands_food_studio/?hl=en"
                alt=""
              >
                <u>Instagram</u>
              </a>
              <a href="https://medium.com/@4handsf" alt="">
                <u>Medium</u>
              </a>
            </div>
          </div>

          <div>
            <p>Read:</p>
            <div className="mediaFlex">
              <a
                href="https://www.irishtimes.com/life-and-style/food-and-drink/restaurant-reviews/review-the-best-pop-up-restaurant-in-ireland-1.4194051"
                alt=""
              >
                <u>Irish Times Article</u>
              </a>
              <a href="https://medium.com/@4handsf" alt="">
                <u>Our Blog</u>
              </a>
            </div>
          </div>
        </section>

        <div className="finalPiece">
          <p>4 Hands Food Studio &copy; 2020.</p>
          <p>
            Design &amp; Code by <a href="https://eoinlynch.com"><u>Eoin Lynch.</u></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
