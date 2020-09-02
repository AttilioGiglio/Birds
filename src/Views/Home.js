import React, { useState, useEffect } from 'react';
import Card from '../Views/Card';
import Navbar from './NavBar.js';

const Home = ({}) => {

    const [state, setState] = useState([]);


    function getfetch() {
        fetch("https://aves.ninjas.cl/api/birds")
        .then((res) => res.json())
        .then((data) => setState(data));
    }
    useEffect(() => { getfetch(); }, []);

    return (
        <div>
            <Navbar />
            {
                state.map((item, index) => (
                    <Card key={index} images={item.images.main} names={item.name.spanish} uid={item.uid}/>
                ))
            }

        </div>
    )
}
export default Home;