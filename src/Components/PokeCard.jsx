import React from 'react'
import PokemonType from './PokemonType'

const PokeCard = ({name, image, id, types}) => {

  

  const getTypes = ()=>{
    if(types[1]){
      return(
        <div className="types flex gap-5">
        <PokemonType type={types[0].type.name}/>
        <PokemonType type={types[1].type.name}/>
       </div>
        
      )
    }
    return(
      <PokemonType type={types[0].type.name}/>
    )
  }

  return (
    <div className='h-40 md:h-64 w-40 md:w-64 shadow-xl rounded-lg flex justify-center items-center flex-col m-2 hover:scale-110 transition-all duration-500 cursor-pointer z-10 bg-white'> 
    <img src={image} alt="" className="h-24 md:h-48" />
    <div className="flex flex-col items-center">
           <h1 className="sm:text-sm md:text-md md:text-lg">{id}-{name}</h1>
            {getTypes()}
       </div>
</div>
  )
}

export default PokeCard