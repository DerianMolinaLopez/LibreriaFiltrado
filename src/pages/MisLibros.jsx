import React from 'react'
import arregloLibros from '../helper/generadorLibro'
import Modal from '../components/Modal'
import { useState, useEffect } from 'react'
import LibroGaleria from '../components/LibroGaleria'
const MisLibros = () => {
  const [contenido,setContenido] = useState(false);
  const [coleccionLibros,setColeccionLibros] = useState([]);
  const [ventanaModal, setVentanaModal] = useState(false);
  const [libro, setLibro] = useState({});//libro que se va a mostrar en el modal
  const [libroEliminar, setLibroEliminar] = useState({});//libro que se va a eliminar de la coleccion
 
  const abrirModal = () => {

    setVentanaModal(true);
  }
  const cerrarModal = () => {
    setVentanaModal(false);
  }


  //extraemos los objetos del localstorage
  useEffect(() => {
    
    if(Object.keys(libroEliminar).length >0){
   
      const filtrarLibro = coleccionLibros.filter(libro => libro.ISBN != libroEliminar.ISBN);
      setColeccionLibros(filtrarLibro);
    }
   }, [libroEliminar])
   //actualizamos el localStorage
    useEffect(() => {
      if(coleccionLibros.length > 0){
        localStorage.setItem('libros', JSON.stringify(coleccionLibros));

      }
     
    }, [coleccionLibros])
 
  useEffect(() => {
    const libros = JSON.parse(localStorage.getItem('libros'));
    if(libros){
     // const eliminarRepetidos = libros.filter(libro=>)
      setContenido(true);
      setColeccionLibros(libros);
    }
  },[])

  return (
    <div>
    
        {contenido ? (
        <>
        <h2 className='text-white font-bold text-5xl text-center mt-10'>
          Libros escogidos
        </h2>
        <section className='flex justify-center mx-auto mt-20'>
          <article className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {
              
              coleccionLibros.map(libro => (
                <LibroGaleria key={libro.ISBN} abrirModal={abrirModal} libro={libro} setLibro={setLibro}/>
              ))
            }

          </article>
        </section>
        </>
       ):(
        <>
        <h2>
          No hay libros escogidos
        </h2>
        </>
       )}
         {ventanaModal&&<Modal cerrarModal={cerrarModal}
                               libro={libro}
                                setLibroEliminar={setLibroEliminar}
                                libroEliminar={libroEliminar}
                                ></Modal>}
     
    </div>
  )
}

export default MisLibros
