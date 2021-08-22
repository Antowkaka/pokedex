import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";

import { prependZeros, formatKey } from "../utils";

const InfoField = ({ keyF, valF }) => (
    <Field>
        <FieldKey>{formatKey(keyF)}</FieldKey>
        <FieldVal>{keyF === 'types' ? valF[0] : valF}</FieldVal>
    </Field>
)

const InfoCard = ({ pokemon }) => {
    const {id, img, name, ...spec} = pokemon;

    return (
        <CardContainer>
            <LargePokemonImage src={pokemon.img} alt={`${pokemon.name} large image`}/>
            <PokemonName>{pokemon.name} #{prependZeros(Number(id))}</PokemonName>
            {Object.entries(spec).map(([key, val], i) => <InfoField key={i} keyF={key} valF={val} />)}
        </CardContainer>
    )
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  border: 1px solid #000000;
  padding: 15px;
  top: 100px;
  width: 450px;
  height: 650px;

  ${down('lg')} {
    width: 350px;
    height: 550px;
  }

  ${down('md')} {
    width: 250px;
    height: 450px;
  }
`;

const LargePokemonImage = styled.img`
  max-width: 450px;
  width: auto;
  margin: auto;
  height: 360px;

  ${down('lg')} {
    max-width: 350px;
    height: 260px;
  }

  ${down('md')} {
    max-width: 250px;
    height: 160px;
  }
`;

const PokemonName = styled.h3`
  text-transform: capitalize;
  font-size: 24px;
  text-align: center;
`;

const Field = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const FieldKey = styled.span`
  text-align: center;
  border: 1px solid #000000;
`;

const FieldVal = styled.span`
  text-align: center;
  border: 1px solid #000000;
`;

export default InfoCard;