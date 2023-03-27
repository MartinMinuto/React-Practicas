import { useState, useEffect } from "react"

const ItemDetailsContainer = () => {
    const [Api, SetApi] = useState()

    const AsyncFunction = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())

      SetApi(response)
    }

    useEffect(() => {
        AsyncFunction()
    })

    return(
        <div>
            {
                Api ? (
                    Api.results.map((ApiRick) => (
                        <div key={ApiRick.id}>
                           <h1>{ApiRick.name}</h1>
                           <img src={`${ApiRick.image}`}/>
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