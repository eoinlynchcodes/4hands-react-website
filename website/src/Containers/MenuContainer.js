import React from 'react';
import '../css-files/Takeaway.css';

function MenuContainer(){

    // const menu = data.props;
    // console.log(menu.price);

    return (
        <div className="menuBox">
            <div>
                <h3><u>Take-away dinner €22</u></h3>
                <ul>
                    <li>Braised Beef Brisket</li>
                    <li>Beetroot Remoulade</li>
                    <li>Toasted Seed Dressing</li>
                    <li>Pea Hummus</li>
                    <li>Potato Bread</li>
                    <li>Aromatics Salad</li>
                </ul>
                <ul>
                    <li>Apple Meringue Pie</li>
                </ul>
                <div>
                    <h3><u>How to Order:</u></h3>
                    <p>Email us by Wednesday evening for Friday collection.<br/>
                        Let us know if you would like something from the "Larder list."<br/>
                        You will receive a secure link for payment prior to collection. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MenuContainer;
