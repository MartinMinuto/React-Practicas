import { useEffect, useState } from "react"


const ItemListContainer = () => {
    const [ api, setApi] = useState()

    const asyncFuncion = async () =>{
      const response = await fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())

      setApi(response);
      console.log(response)
    }

    useEffect(() => {
        asyncFuncion()
    }, [])

    return (
        <div>
          {api ? (
            api.results.map((Apii) => (
              <div key={Apii.id}>
                <h1>{Apii.name}</h1>
                <h2>{Apii.status}</h2>
                <img src={`${Apii.image}`}/>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )
}

export default ItemListContainer