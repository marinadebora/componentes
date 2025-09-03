import { useState } from 'react'
import Modal from './Modal'

const Home = () =>
{
  const [modalAccion, setModalAccion] = useState(false);
  const modalOPenClose = () =>
  {
    setModalAccion(!modalAccion);
    console.log(modalAccion)
  }

  return (
    <div className='w-[6rem] h-[6rem] border flex items-center justify-center cursor-pointer' onClick={modalOPenClose}>
      <p>Abrir modal</p>
      {
        modalAccion && (
          /* ajusta el modal dando el tamaño que desees como tambien los colores */
          <Modal onClose={modalOPenClose}>
            <div className='w-full h-full flex items-star justify-star'>
              <p className='border border-blue-300 p-2'>hola soy un modal 🖐🏼 puedes cerrarme haciendo clic dentro del cuadro rojo <br /> si mi contenido es muy grande evalua poner la funcion en este div <br /> para poder cerrar desde cualquier parte</p>
            </div>
          </Modal>
        )
      }
    </div>
  );
};

Home.propTypes = {};

export default Home;