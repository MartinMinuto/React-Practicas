import {useEffect, useState} from 'react'

const ItemListConter = () => {
    const [getFact, setGetFact] = useState()

    const fecthGetFact = async () => {
        const responce = await fetch('https://rickandmortyapi.com/api/character')
        .then((responce) => responce.json())

        setGetFact(responce)
    }

    useEffect(() => {
        fecthGetFact()
    })


    return (
        <div>
             {
                getFact ? (
                 getFact.results.map((fact) => (
                  <div key={fact.id}>
                    <h1>{fact.name}</h1>
                  </div>
                 ))
                ) : (
                    <h1>Loading...</h1>
                )
             }
        </div>
    )
}

export default ItemListConter