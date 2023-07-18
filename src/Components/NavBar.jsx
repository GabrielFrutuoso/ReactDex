import { useNavigate } from "react-router-dom"

const NavBar = ({filterPokemon, isHidden}) => {

  const navigate = useNavigate()

  return (
    <nav className="bg-red-500 flex direction-culumn justify-between items-center w-full fixed top-0 z-20 p-2">
      <div className="flex items-center mx-4 gap-1 cursor-pointer" onClick={()=> navigate('/Home')}>
    <img src="../../images/logo-do-react.png" alt="" className="h-10 rotating" />
    <h1 className="text-xl text-white">ReactDex</h1>
    </div>
    {!isHidden && (
      <input className='mx-4 p-1 outline-none text-white bg-red-500 border-b border-b-white placeholder:text-white w-24 md:w-36' type="text" placeholder='Pesquisar' onChange={(e)=>filterPokemon(e.target.value)}/> 
    )}
    
 </nav>
  )
}

export default NavBar