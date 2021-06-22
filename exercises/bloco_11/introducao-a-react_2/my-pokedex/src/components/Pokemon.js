import React from 'react';
import '../Pokemon.css';

class Pokemon extends React.Component{
  render(){
    const { pokeInfo } = this.props;

    return (
      <section className='pokemon'>
        <section className='infos'>
        <p>{pokeInfo.name}</p>
        <p>{pokeInfo.type}</p>
        <p>
          {pokeInfo.averageWeight.value} {pokeInfo.averageWeight.measurementUnit}
        </p>
        </section>
        <img src={pokeInfo.image} alt={pokeInfo.name}/>
      </section>
    );
  }
};

export default Pokemon;