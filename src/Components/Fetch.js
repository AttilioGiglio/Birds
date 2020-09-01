import React, { useState, useEffect } from 'react'

const Fetch = () => {

    const [state, setState] = useState({ pajaros: [] });

    useEffect(() => {
        fetch('https://kitsu.io/api/edge/anime')
            .then((resp) => resp.json())
            .then((birds) => {
                setState(s => ({ ...s, pajaros: birds.data}))
                console.log(state.pajaros)
            })
    }, [])
    return (
        
        <div>
            <h1>has</h1>
        </div>
    )

}

export default Fetch

// const Home = () => {
//     const [state, setState] = useState({ pajaros: [] });

//     useEffect(() => {
//         fetch('https://kitsu.io/api/edge/anime').then((resp) => resp.json()).then((birds) => {
//             setState(s => ({ ...s, pajaros: birds.data }))
//         })
//     }, [])
// }
