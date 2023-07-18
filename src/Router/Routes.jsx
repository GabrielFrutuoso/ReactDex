import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home  from "../Pages/Home"
import Profile from '../Pages/Profile'
import Start from '../Pages/Start'

const Rotas = () => {

  const [data, setData] = useState()


  return (

    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Start/>}/>
            <Route path="/Home" element={<Home setData={setData} />}/>
            <Route path="/Profile" element={<Profile data={data} />}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default Rotas