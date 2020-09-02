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
                (<div class="spinner">
                    <div class="cube1"></div>
                    <div class="cube2"></div>
                </div>)
                :
                (<div>
                    <div class="card m-3">
                        <img src={state.map.image} class="card-img-top" />
                        <div class="card-body">
                             <h5 class="card-title">{state.name.spanish}</h5>
                <p class="card-text">{state.habitat}</p>
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
<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">{state.name.spanish}</h1>
  <p class="lead">{state.habitat}</p>
</div>
</div>
*/