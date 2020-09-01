import React from 'react';
import '../css-files/Footer.css';

function Footer(){

    return (
        <div>
            <div className="footer">
                <section className="socialMedia">
                    <p>Follow us:</p>
                    <a href="https://www.instagram.com/4hands_food_studio/?hl=en" alt="">Instagram</a>
                    <a href="https://medium.com/@4handsf" alt="">Medium</a>
                </section>

                <section className="readThese">
                    <p>Read:</p>
                    <a href="https://www.irishtimes.com/life-and-style/food-and-drink/restaurant-reviews/review-the-best-pop-up-restaurant-in-ireland-1.4194051" alt="">Irish Times Article</a>
                    <a href="https://medium.com/@4handsf" alt="">4 Hands Food Studio - Blog</a>
                </section>

                <section className="endings">
                    <p>
                        4 Hands Food Studio &copy; 2020.
                    </p>
                    <p>
                        Design &amp; Code by <a href="https://eoinlynch.com">Eoin Lynch</a>
                    </p>
                </section>
            </div>

        </div>
    )
}

export default Footer;