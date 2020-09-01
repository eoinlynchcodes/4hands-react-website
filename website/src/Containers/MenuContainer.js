import React from 'react';

function MenuContainer(data){

    const menu = data.props;
    console.log(menu.price);

    return (
        <div>
            <h2>Menu:</h2>
            <h3>{menu.items}</h3>
            <h1>€{menu.price}</h1>
            <h3>{menu.howToOrder}</h3>
            <h3>Collection Point:</h3>
            <h3>{menu.pickUpPoints }</h3>
        </div>
    )
}

export default MenuContainer;
