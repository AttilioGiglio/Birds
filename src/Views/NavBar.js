import React from 'react'

function navBar() {
    return (
        <div>
               <nav className="navbar navbar-light bg-light"> <a className="navbar-brand" href="#"> <img src='' width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" /> Bootstrap </a>

                <div className="dropdown"> <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown button </button> <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> <a className="dropdown-item" href="#">Action</a> <a className="dropdown-item" href="#">Another action</a> <a className="dropdown-item" href="#">Something else here</a> </div> </div>
            </nav>
        </div>
    )
}

export default navBar
