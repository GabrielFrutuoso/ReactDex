import axios from 'axios'
import NavBar from '../Components/NavBar'
import PokeCard from '../Components/PokeCard'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"



const Home = ({setData}) => {

    const [pokemons, setPokemons] = useState([])

    const navegar = useNavigate()

    useEffect(()=>{
      GetAllPokemons()

    }, [])
  
    
  
    
  
    const GetAllPokemons = ()=>{
  
      const pokeEndpoint = []


  
      for(var i = 1; i<300; i++){
      pokeEndpoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
   
      const responses = axios.all(pokeEndpoint.map((endpoint)=>axios.get(endpoint))).then((res)=> {
        setPokemons(res)
    })
      return responses
      
    }

    const filterPokemon = (name) =>{
        const pokefilter = []
        if (name==="") {
            GetAllPokemons()
        }
        for (let i in pokemons) {
            if(pokemons[i].data.name.includes(name)){
                pokefilter.push(pokemons[i])
            }
        }

        setPokemons(pokefilter)
    }

    const goProfile = (data)=>{
      navegar('/profile')
      setData(data)
    }

  return (
    <>
    <NavBar filterPokemon={filterPokemon}/>
    <div className="w-full h-auto flex flex-wrap justify-center items-center mt-20" >
      {pokemons.map((pokemon, key)=>(
        <div onClick={()=> goProfile(pokemon.data)} className='m-0'>
        <PokeCard  key={key} name={pokemon.data.name} image={pokemon.data.sprites.front_default} id={pokemon.data.id} types={pokemon.data.types}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default Home