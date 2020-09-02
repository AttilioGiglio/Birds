import React from 'react'

function navBar({uid}) {



    return (
        <div>
               <nav className="navbar navbar-light bg-light"><h1> Chilean Birds</h1>
                <div className="dropdown"> <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown button </button> <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> <a className="dropdown-item" href="#">Action</a> <a className="dropdown-item" href="#">Another action</a> <a className="dropdown-item" href="#">Something else here</a> </div> </div>
            </nav>
        </div>
    )
}

export default navBar
