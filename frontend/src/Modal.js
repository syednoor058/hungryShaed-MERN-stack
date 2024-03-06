import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'rgb(34,34,34)',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    height: '80%',
    width: '80%'
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

export default function Modal({ children, onClose }) {
    
    return ReactDom.createPortal(
        <>
          <div style={OVERLAY_STYLES} />
          <div style={MODAL_STYLES}>
            <button className='btn fs-2' style={{ marginLeft: "98%", marginTop: "-35px" }} onClick={onClose}> <i class="fa-solid fa-circle-xmark text-danger"></i> </button>
            {children}
          </div>
        </>,
        document.getElementById('cart-root')
  )
}
