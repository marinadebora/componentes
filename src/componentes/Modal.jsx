import PropTypes from 'prop-types'
import  '../index.css'

const Modal = ({ onClose, children }) => (
  <div className="border border-red-600 fixed top-10 left-10 w-[80%] h-[80%] bg-[#00000080] z-999" onClick={onClose}>
    <div className="fixed top-[50%] left-[50%] -traslate-x-[50%] -traslate-y-[50%] z-1000" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
);

export default Modal;

Modal.propTypes ={
  onClose:PropTypes.func,
  children:PropTypes.element
}
/* forma correcta de pasar estilos por parametro en tailwindcss <div className={`${textColor} ${textSize}`}*/