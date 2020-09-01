import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const Detail = () => {
    const [state, setState] = useState([]);

    const{uid} = useParams();
    console.log(uid)

   const getfetch = async() => {
    const data = await  fetch(`https://aves.ninjas.cl/api/birds/${uid}`)
    const birds = await data.json()
    return setState(birds)
    }
    useEffect(() => { getfetch(); }, []);

    return (
   
<div>
     <p>{state.habitat}</p>
</div>
      
        
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