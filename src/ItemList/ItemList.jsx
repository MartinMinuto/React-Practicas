import { useEffect, useState } from "react";

const ItemList = () => {
    const [getApi, setGetApi] = useState([])
    const [getImg, setGetImg] = useState()

    const fecthGetApi = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())

        setGetApi(response.results)
    }

    const fecthGetImg = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
        .then((response) => response.json())

        setGetImg(response.sprites.front_default)
    }

    useEffect(() => {
        fecthGetApi()
    }, [])

    useEffect(() => {
       if (getApi.length > 0) {
          fecthGetImg()
       }
    }, [getApi])



    return(
        <div>
            {
                getApi.length > 0 ? (
                  <div>  
                    {getApi.slice('',2).map((Api) => (
                        <div key={Api.id}>
                            <h1>{Api.name}</h1>
                        </div>
                    ))}
                   </div> 
                ) : (
                    <h1>Loading...</h1>
                )
            }
            {
             (getImg && <img src={getImg} alt='Imagen de Pokemon'/>)
            }
        </div>
    )
}

export default ItemList