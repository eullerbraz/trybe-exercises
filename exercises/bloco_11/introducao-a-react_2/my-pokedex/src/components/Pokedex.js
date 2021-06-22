import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';
import '../Pokedex.css';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    return (
      <section className='pokedex'>
        <h1>Pokédex</h1>
        {
          pokemons.map((pokemon) => <Pokemon pokeInfo={pokemon}/>)
        }
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokeInfo: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokedex;