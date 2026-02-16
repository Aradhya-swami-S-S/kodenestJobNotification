import React, { useEffect } from 'react'
import './Toast.css'

function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [onClose, duration])

  return (
    <div className="toast">
      <p className="toast-message">{message}</p>
    </div>
  )
}

export default Toast
