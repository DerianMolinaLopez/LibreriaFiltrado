import React, { useState } from 'react';

const Modal = ({ cerrarModal, libro, setLibroEliminar }) => {
  
    const { title, pages, genre, cover, synopsis, year, ISBN, author } = libro
    const handleOperaciones = (e) => {
        e.preventDefault();
        setLibroEliminar(libro)
        cerrarModal();

    }
    
    return (
        <div className='fixed bg-black bg-opacity-90 inset-0 flex justify-center items-center'>
            <div className=' w-1/2 h-auto rounded-lg bg-gray-200 '>
            <div className='flex flex-col  h-full  gap-2 w-auto lg:justify-center sm:justify-center sm:flex-col md:justify-center lg:flex-row items-center'>


                    <picture className='p-3 w-1/2'>
                        <img className='h-full rounded-lg' src={cover} alt="" />
                    </picture>
                    <section className='w-1/2 p-2'>
                        <h3 className='font-bold text-3xl mt-4'>Titulo: {" "}<span className='font-normal'>{title}</span></h3>
                        <h3 className='font-bold  mt-4'>Genero: {" "}<span className='font-normal'>{genre}</span></h3>
                        <h3 className='font-bold  mt-4'>Fecha de publicacion: {" "}<span className='font-normal'>{year}</span></h3>
                        <h3 className='font-bold  mt-4'>Sinopsis: {" "}<span className='font-normal'>{synopsis}</span></h3>

                        <div className=''>
                            <button onClick={() => cerrarModal()}
                                className='w-auto md:w-full uppercase bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-5 rounded'
                            >
                                Regresar
                            </button>
                            <button
                                className='w-auto md:w-full uppercase bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mt-5 rounded'
                                onClick={handleOperaciones}
                            >
                                Eliminar de mi galeria
                            </button>
                        </div>

                    </section>
                </div>

            </div>
        </div>
    );
};
export default Modal;
