import React from 'react';
import styles from '../Custom.module.css';

const Home = () => {
  return (
    <>
      <h1 className={`mt-[115px] flex justify-center text-5xl font-semibold text-black ${styles.textShadow} ${styles.cntrlTop}`}>
        Contact Us
      </h1>
      <div className='flex mt-16 justify-center'>
        <iframe className={`rounded-2xl sm:w-[600px] ${styles.boxShadow}`} src="https://docs.google.com/forms/d/e/1FAIpQLSdo-mqMrBOadBcZ-608f-otEpHfyTRhxv2sHmAN-L_yN4UTvw/viewform?embedded=true" width={640} height={856} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </>

  )
}

export default Home
