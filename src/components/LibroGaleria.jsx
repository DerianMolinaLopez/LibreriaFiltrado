import React from 'react'

const LibroGaleria = ({libro,setLibro,abrirModal,setArregloLibros}) => {
    const operar = () => {
        abrirModal()
        setLibro(libro);
    }

  return (
    <div  onClick={()=>operar()} className='w-56 mt-5 cursor-pointer hover:opacity-50 hover:transition-all
                hover:duration-200 hover:p-3 relative' key={libro.ISBN}>
                  <img className='rounded-lg shadow-black shadow-lg' src={libro.cover} alt="" />
                  <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200'>
                    <div className='opacity-50'>
                      <span className='text-white text-lg'>Ver</span>
                    </div>
                    
                  </div>
                </div>
  )
}

export default LibroGaleria
