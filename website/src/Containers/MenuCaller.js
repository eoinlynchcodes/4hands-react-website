import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuContainer from './MenuContainer';

function MenuCaller(){

    const [ menuCall, setMenuCall ] = useState([]);

    useEffect(() => {
        axios.get('https://four-hands-food-studio-node-js.herokuapp.com/menu')
        .then(response => {
            setMenuCall(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            {/* {
                menuCall.map((data, key) => {
                    console.log(data);
                    return <MenuContainer props={data} />
                })
            } */}
            <MenuContainer/>
        </div>
    )
}

export default MenuCaller;