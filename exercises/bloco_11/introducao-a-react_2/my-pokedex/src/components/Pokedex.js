import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';
import '../Pokedex.css';

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

export default Pokedex;