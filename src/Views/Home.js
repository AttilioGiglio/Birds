import React, { useState } from 'react';
import { Card } from './Card';

const Home = () => {
    const [state, setState] = useState({
        name: { spanish: '' },
        images: { main: '' },
        _links: { self: '' },
    })
    return (
        <div>

            <nav className="navbar navbar-light bg-light"> <a className="navbar-brand" href="#"> <img src='' width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" /> Bootstrap </a>

                <div className="dropdown"> <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown button </button> <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> <a className="dropdown-item" href="#">Action</a> <a className="dropdown-item" href="#">Another action</a> <a className="dropdown-item" href="#">Something else here</a> </div> </div>


            </nav>

            <Card />

            <h1>Hello World!</h1>
        </div>
    )
}
export default Home;