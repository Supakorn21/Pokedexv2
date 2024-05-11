import React, { useEffect } from 'react'
import {pokemonDetailServices, pokemonListServices} from '@/services'

const HomePage = () => {

    useEffect(() => {
        callData();
    } ,[])

    const callData = async () => {
        const data = await pokemonListServices.getPokemonList()
        const pokemonDetail = await pokemonDetailServices.getPokemonDetail('bulbasaur');
        console.log('pokemonList', data.data.results)
        console.log('pokemonDetail', pokemonDetail.data)
    }
  return (
    <div>
        Home Page
    </div>
  )
}

export default HomePage;
