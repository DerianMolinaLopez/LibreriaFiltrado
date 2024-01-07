import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../components/Header'
import Libro from '../components/Libro'

import { useState, useEffect } from 'react'
import librosArreglo from "../helper/generadorLibro"
const Inicio = () => {
  // const [categorias, setCategorias] = useState([]);

  const [categoria, setCategoria] = useState('');
  const [libro, setLibro] = useState({});
  const [arregloLibros,setArregloLibros] = useState([]);
  const [rango, setRango] = useState(0);
  const [librosFiltradosRango, setLibrosFiltradosRango] = useState([]);
  const arregloAux = [...librosArreglo];
  const categorias = [...new Set(librosArreglo.map(libro => libro.book.genre))]
   


  useEffect(() => { 

    if(categoria != "" && rango >0 ){
     
      const LibrosFiltrados = arregloAux.filter(libro => libro.book.pages >= rango && libro.book.genre == categoria);
      setLibrosFiltradosRango(LibrosFiltrados);
      return
    }
     
    if(rango>0){
     
      const LibrosFiltrados = arregloAux.filter(libro => libro.book.pages >= rango);
      setLibrosFiltradosRango(LibrosFiltrados); 
      return
    }
    if(categoria != ""){
     
      const LibrosFiltrados = arregloAux.filter(libro => libro.book.genre == categoria);
      setLibrosFiltradosRango(LibrosFiltrados); 
      return
    }
     
  }, [rango,categoria])  
  //debo verificar si hay valores en el localStorage
  useEffect(() => {    
    const libros = JSON.parse(localStorage.getItem('libros')) ?? [];  

    if (libros.length > 0) {

      setArregloLibros(libros);
    }else{
      setArregloLibros(libros);
    }
  }, [])

useEffect(() => {
  const libros = JSON.parse(localStorage.getItem('libros')) ?? [];
  if (Object.keys(libro).length != 0 && !libros.some(lib => JSON.stringify(lib) === JSON.stringify(libro))) {
    const newLibros = [...libros, libro];
    // Guarda los libros en el localStorage
    localStorage.setItem('libros', JSON.stringify(newLibros));
    // Actualiza el estado local
    setArregloLibros(newLibros);
  }
}, [libro]);

useEffect(() => {
  if(arregloLibros.length > 0){
   
    localStorage.setItem('libros', JSON.stringify(arregloLibros));
  }

},[arregloLibros])



  



  return (
    <div className=''>
      <h2 className='text-white text-6xl text-center mt-24 font-semibold'>Explora nuevos mundos, el destino, lo escoges tu</h2>
      <section>
        <div className='flex justify-around mt-40'>
          <div className='w-1/2 flex justify-center' >
            <select name="categorias"
              className='w-1/2 rounded-lg cursor-pointer lg:p-3 sm:p-2 hover:bg-teal-500 transition-all tramsition-duration-200 bg-teal-600 text-white font-bold text-center sm:text-2xl '
              onChange={(e) => setCategoria(e.target.value)}
              value={categoria}
            >
              <option value="">selecicona una categoria</option>
              {
                categorias.map(categoria => (
                  <option key={categoria} value={categoria}>{categoria}</option>
                ))
              }
            </select>
          </div>
          <div className='w-1/2'>
            <div className=' border-emerald-500 border-4 w-1/2 rounded-lg shadow-md '>
              <label htmlFor="" className='block text-center text-white font-bold'>Filtrar por paginas</label>
              <div className='flex justify-center flex-col'>

                <input
                  type="range" 
                  name="" id="" min="0" max="1000" className='block' value={rango} onChange={(e) => {
                    setRango(e.target.value)
                   
                    
                  }
                    
                    } />


                <label htmlFor="" className='block text-center text-white font-bold'>{rango == 50 ? "" : rango}</label>

              </div>

            </div>

          </div>
        </div>
        <div className='bg-emerald-600 h-1 mt-10'></div>
        <section className='grid lg:grid-cols-3 md:grid-cols-2 px-32'>
          {
            librosFiltradosRango.length > 0 ?
            librosFiltradosRango.map(libro => (
              <Libro
                setArregloLibros={setArregloLibros}
                arregloLibros={arregloLibros}
                setLibro ={setLibro}
                libro={libro.book}
                key={libro.book.ISBN}
              />
            ))
            :
            librosArreglo.map(libro => (
              <Libro
                setArregloLibros={setArregloLibros}
                arregloLibros={arregloLibros}
                setLibro ={setLibro}
                libro={libro.book}
                key={libro.book.ISBN}
              />
            ))
          }
        </section>

      </section>
    </div>
  )
}

export default Inicio
