import React from 'react'

const PonkemonType = ({type}) => {
  return (
    <div className="types flex gap-5">
        <p className='px-2 py-0.5 sm:text-xs md:text-sm rounded-md font-semibold' id={type}>{type}</p>
       </div>
  )
}

export default PonkemonType