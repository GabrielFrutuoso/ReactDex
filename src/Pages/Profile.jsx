import NavBar from '../Components/NavBar'
import PokemonType from '../Components/PokemonType'
import Graphic from '../Components/Graphic'
import { useEffect, useState } from 'react'
import axios from 'axios'



const Profile = ({data}) => {

    const getTypes = ()=>{
        if(data.types[1]){
          return(
            <div className="types flex gap-5">
            <PokemonType type={data.types[0].type.name}/>
            <PokemonType type={data.types[1].type.name}/>
           </div>
            
          )
        
    }
    if(data.types[1]=== undefined){
        return(
          <div className="types flex gap-5">
          <PokemonType type={data.types[0].type.name}/>       
         </div>
          
        )
      
  }else{
    
  }
}
      
    
  
  return (
    <>
        <NavBar isHidden={true}/>
        <main>
            <section className='flex flex-wrap justify-center w-9/12 m-auto p-1'>
                <aside className='w-72 md:w-6/12'>
                    <img src={data.sprites.front_default} alt="" className='w-full' />
                </aside>
                <aside className='flex flex-col gap-4 items-center justify-center p-2'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl'>{data.name}</h1>
                        <div className="flex flex-row justify-start items-center gap-2">
                           {getTypes()}  
                        </div>
                    </div>
                    <div className="stats">
                        <p>altura: {data.height}m</p>
                        <p>peso: {data.weight}kg</p>
                    </div>
                    
                </aside>
            </section>

            <section className='flex flex-wrap justify-center w-9/12 m-auto p-1'>
                <h1></h1>
            </section>

            <section className='flex flex-wrap justify-center w-9/12 m-auto p-1'>
                <div className='w-full flex flex-col items-center gap-2'>
                    <h1 className='text-center text-3xl'>atributos</h1>
                    
                    <div className='sm:h-36 md:h-72 flex justify-center'>
                       <Graphic hp={data.stats[0].base_stat} attack={data.stats[1].base_stat} defense={data.stats[2].base_stat} spAttack={data.stats[3].base_stat} spDefense={data.stats[4].base_stat}/>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Profile