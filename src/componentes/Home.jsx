import { useState } from 'react'
import './App.css'
import Modal from './componentes/Modal'

const Home = () =>
{
  const [modalAccion, setModalAccion] = useState(false);
  const modalOPenClose = () =>
  {
    setModalAccion(!modalAccion);
    console.log(modalAccion)
  }
  
  return (
    <div onClick={modalOPenClose}>
      abrir
      {
        modalAccion && (
          <Modal onClose={modalOPenClose}>
            <div>
              hola soy un modal
            </div>
          </Modal>
        )
      }
    </div>
  );
};

Home.propTypes = {};

export default Home;