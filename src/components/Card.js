import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";

import { beigeColors } from "../consts";

const Card = ({ imgUrl, pokemonName, active, types, setPokemon }) => (
    <CardContainer onClick={() => setPokemon(pokemonName)} active={active}>
        <PokemonImg src={imgUrl} alt={`${pokemonName} image`} />
        <PokemonName>{pokemonName}</PokemonName>
        <Types>
            {types.map((type, i) => <TypeBeige key={i} type={type}>{type}</TypeBeige>)}
        </Types>
    </CardContainer>
);


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 31%;
  border: 1px solid ${({ active }) => active ? '#149414' : '#000000'};
  transform: scale(${({ active }) => active ? '1.05' : '1'});
  margin: 1%;
  cursor: pointer;

  ${down('lg')} {
    width: 40%;
  }

  ${down('md')} {
    width: 60%;
  }
`;

const PokemonImg = styled.img`
  max-width: 100%;
  height: 50%;
  margin: 5px;
`;

const PokemonName = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Types = styled.div`
  display: flex;
  width: 100%;
`;

const TypeBeige = styled.span`
  text-transform: capitalize;
  background: ${({ type }) => beigeColors[type]};
  padding: 5px;
  border-radius: 5px;
  margin-left: 5px;
`;

export default Card;