import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { down } from "styled-breakpoints";

import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Card from "./components/Card";
import LoadMore from "./components/LoadMore";
import InfoCard from "./components/InfoCard";
import Select from "./components/Select";
import getPokemons from "./api/getPokemons";
import { extractTypes } from "./utils";
import { limit, theme } from "./consts";

function App() {
  const [pokemons, setPokemons] =  useState({
      all: [],
      selected: null
  });
  const [currPokemon, setCurrPokemon] = useState(null);
  const [currentLimit, setCurrentLimit] = useState(limit);
  const [typesState, setTypesState] = useState({
      options: [],
      selectedType: null
  });
  const [loadingState, setLoadingState] = useState({
      loading: false,
      error: null
  });

  useEffect(() => {
    setLoadingState({ loading: true, error: null });
    getPokemons(currentLimit)
        .then((res) => {
            typesState.selectedType ? setPokemons({
                all: res,
                selected: res.filter(pokemon => pokemon.types.includes(typesState.selectedType))
            }) : setPokemons({ all: res, selected: null });
            setTypesState(prev => ({ options: extractTypes(res), selectedType: prev.selectedType }));
            setLoadingState({ loading: false, error: null });
        })
        .catch(err => {
            setLoadingState({ loading: false, error: err });
            console.log(err);
        });
  }, [currentLimit]);

  const cardHandler = (name) => {
      setCurrPokemon(pokemons.all.find(pokemon => pokemon.name === name));
  };

  const loadMore = () => {
      setCurrentLimit(prev => prev * 2);
  };

  const selectType = ({ target }) => {
      setTypesState(prev => ({ options: prev.options, selectedType: target.value }));
      setPokemons(prev => ({ all: prev.all, selected: prev.all.filter(({ types }) => types.includes(target.value)) }));
  };

  const reset = () => {
      setCurrPokemon(null);
  }

  return (
    <ThemeProvider theme={theme}>
        <BodyContainer className="App">
            <Header title='Pokedex' active={currPokemon} onClick={reset} />
            <Select onClick={selectType} options={typesState.options} />
            <MainContainer>
                <ListContainer active={currPokemon}>
                    {!pokemons.all ? <Preloader /> :
                        <>
                            {
                                typesState.selectedType ?
                                    pokemons.selected.map((pokemon, i) =>
                                        <Card
                                            key={i}
                                            imgUrl={pokemon.img}
                                            pokemonName={pokemon.name}
                                            types={pokemon.types}
                                            setPokemon={cardHandler}
                                            active={currPokemon && pokemon.name === currPokemon.name}
                                        />) :
                                    pokemons.all.map((pokemon, i) =>
                                        <Card
                                            key={i}
                                            imgUrl={pokemon.img}
                                            pokemonName={pokemon.name}
                                            types={pokemon.types}
                                            setPokemon={cardHandler}
                                            active={currPokemon && pokemon.name === currPokemon.name}
                                        />)
                            }
                            {loadingState.loading ? <Preloader /> : <LoadMore onClick={loadMore}/>}
                        </>
                    }
                </ListContainer>
                <InfoContainer active={currPokemon}>
                    {currPokemon && <InfoCard pokemon={currPokemon} />}
                </InfoContainer>
            </MainContainer>
        </BodyContainer>
    </ThemeProvider>
  );
}

const BodyContainer = styled.div`
  font-family: 'Roboto',serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 1300px;
  width: 100%;
`;

const MainContainer = styled.div`
  display: flex;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;

  ${down('xs')} {
    display: ${({ active }) => active ? 'none' : 'flex'};
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  ${down('xs')} {
    display: ${({ active }) => active ? 'flex' : 'none'};
    width: 100%;
  }
`;

export default App;
