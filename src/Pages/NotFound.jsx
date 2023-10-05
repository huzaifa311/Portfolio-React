import React from 'react'
import styles from '../Custom.module.css';

const NotFound = () => {
  return (
    <div className={`mt-28 flex justify-center text-6xl mb-64 font-bold text-red-600 ${styles.textShadow} ${styles.cntrlTop}`}>
      404 Error NotFound
    </div>
  )
}

export default NotFound
