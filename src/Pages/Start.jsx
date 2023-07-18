import { useNavigate } from "react-router-dom"

const Start = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-red-500 h-screen  flex flex-col justify-center items-center gap-3 overflow-hidden'>
        <div className='relative h-60'>
            <img src="../../images/logo-do-react.png" alt="react-logo" className='rotating h-full drop-shadow-xl '/>
            <img src="../../images/pokeball.png" alt="pokeball pixel art" className='poke  cursor-pointer' onClick={()=> navigate('/Home')}/>
        </div>
        <div className='flex flex-col items-center gap-2 mt-2'>
        <h1 className="text-white text-4xl">reactdex</h1>
        <p className="bg-red-700 text-slate-200 p-1 rounded-md shadow-xl shadow-red-800/50 hover:underline hover:cursor-pointer">Aperte no centro da <strong>Pokebola</strong>  para iniciar</p>
        </div>
    </div>
  )
}

export default Start