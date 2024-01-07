import React from 'react'
import arregloLibros from '../helper/generadorLibro'
//primero generamos  los componentes de los libros
function GeneradorLibro(){
  
  return
  (
    <>
      {arregloLibros.length > 0 ? arregloLibros.map((libro) => 
       <h3></h3>
      ): <h1>No hay libros</h1>}    
    </>
  )
}
const ContenedorLibros = () => {
  return (
    <main>
      <GeneradorLibro/>
    </main>
  )
}

export default ContenedorLibros
