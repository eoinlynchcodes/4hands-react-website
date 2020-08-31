import React from 'react';
import '../css-files/Footer.css';

function Footer(){

    return (
        <div>
            <div className="footer">
                <section className="socialMedia">
                    <p>Follow us:</p>
                    <a href="" alt="">Instagram</a>
                    <a href="" alt="">Medium</a>
                </section>

                <section className="readThese">
                    <p>Read:</p>
                    <a href="" alt="">Irish Times Article</a>
                    <a href="" alt="">4 Hands Food Studio - Blog</a>
                </section>

                <section className="endings">
                    <p>
                        4 Hands Food Studio &copy; 2020.
                    </p>
                    <p>
                        Design &amp; by <a href="https://eoinlynch.com">Eoin Lynch</a>
                    </p>
                </section>
            </div>

        </div>
    )
}

export default Footer;