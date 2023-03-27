import { useEffect, useState } from "react";


const ItemDetailsContainer = () => {
    const [rickApi, setApiRick] = useState()

    const AsyncFuncion = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())

        setApiRick(response)
    }

    useEffect(() => {
        AsyncFuncion()
    }, [])

    return (
        <div>
            { rickApi ? (
                rickApi.results.map((rick) => (
                    <div key={rick.id}>
                       <h1>{rick.name}</h1>
                    </div>
                ))
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </div>
    )
}    

export default ItemDetailsContainer