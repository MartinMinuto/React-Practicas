import { useState, useEffect } from "react";

const ItemDetailsContainer = () => {
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [charizardImageUrl, setCharizardImageUrl] = useState();

  const fetchRickAndMortyData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character").then((response) => response.json());

    setRickAndMortyData(response.results);
  };

  const fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard").then((response) => response.json());
    
    setCharizardImageUrl(response.sprites.front_default);
  };

  useEffect(() => {
    fetchRickAndMortyData();
  }, []);

  useEffect(() => {
    if (rickAndMortyData.length > 0) {
      fetchPokemon();
    }
  }, [rickAndMortyData]);

  return (
    <div>
      {rickAndMortyData.length > 0 ? (
        <div>
          {rickAndMortyData.slice('',1).map((character) => (
            <h1 key={character.id}>{character.name}</h1>
          ))}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
      {charizardImageUrl && <img src={charizardImageUrl} alt="charizard" />}
    </div>
  );
};

export default ItemDetailsContainer;
