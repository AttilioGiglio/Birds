import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'

const Detail = () => {
    const [state, setState] = useState(null);

    const { uid } = useParams();
    console.log(uid)

    const getfetch = async () => {
        const data = await fetch(`https://aves.ninjas.cl/api/birds/${uid}`)
        const birds = await data.json()
        return setState(birds)
    }
    useEffect(() => { getfetch(); }, []);

    return (
        <>
            {state === null ?
                (<div className="spinner">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                </div>)
                :
                (<div>
                    <div className="card m-3 cards">
                        <img src={state.map.image} className="card-img-top images" />
                        <div className="card-body">
                             <h5 className="card-title">{state.name.spanish}</h5>
                <p className="card-text">{state.habitat}</p>
                        </div>
                    </div>
                </div>)}
        </>
    )
}

export default Detail;
     // <div className="card" style="width: 18rem;">
/* <img src={state.map.image} className="card-img-top" alt="..."/>
/* <div className="card-body">
<h5 className="card-title">{state.name.spanish}</h5>
<p className="card-text">{state.iucn.description}.</p>
</div>
<div className="jumbotron jumbotron-fluid">
<div className="container">
  <h1 className="display-4">{state.name.spanish}</h1>
  <p className="lead">{state.habitat}</p>
</div>
</div>
*/