import React, { useEffect } from 'react'
import {pokemonDetailServices, pokemonListServices} from '@/services'
import SearchForm from '@/components/SearchForm';

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
    <div className=' w-[90%] m-[auto] max-w-[1100px]'>
       <div className='flex justify-center'>
           <img src="./src/images/logo.webp" className='max-h-[80px] mt-[20px]' alt="" />
       </div>
        <SearchForm />
    </div>
  )
}

export default HomePage;
