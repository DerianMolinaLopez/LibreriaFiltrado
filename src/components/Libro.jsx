import React from 'react'
import { useState, useEffect } from 'react'
import laSangre from '../img/laSangre.jpg'

const Libro = ({libro,setLibro,setArregloLibros,arregloLibros}) => {
  const {title,pages,genre,cover,synopsis,year,ISBN,author} = libro
  const [agregado,setAgregado] = useState(false)
  const operadores = () => {
  
    if(agregado){
       //!queda pendiente la operacion de eliminar de la galeria
    
      setAgregado(false)
      //eliminamos los libros de mi arreglo
      const filtrados = arregloLibros.filter(lib => lib.ISBN !== libro.ISBN)
      setArregloLibros(filtrados)
      
      
    }else{
      setAgregado(true)
      setLibro(libro)
    }
    

  }
  return (
    <div className='flex items-center justify-center mt-10'>
       <article className=' w-auto rounded-md'>
      <div className='w-auto flex justify-center'>
         <img className='w-48 shadow-black shadow-xl' src={cover}  />
      </div>
     
      <h2 className='text-white text-center font-semibold text-2xl mt-3'>{title}</h2>
      <h3 className='text-white font-semibold mb-3'>Autor:<span className='font-normal'>{author.name}</span ></h3>
      <button type='button' 
      className={`font-bold ${agregado?"bg-red-600":"bg-teal-600"} text-white w-full p-1 rounded-md text-2xl
      ${agregado?"hover:bg-red-500":"hover:bg-teal-500"} hover:transition-all hover:duration-200`}
      onClick={()=>operadores()}
      >{agregado?"Eliminar":"Agregar"}</button>
    </article>
    </div>
   
  )
 
}

export default Libro
