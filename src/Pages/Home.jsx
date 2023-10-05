import React from 'react';
import styles from '../Custom.module.css';
import gitImg from '../Images/github.png';
import instaImg from '../Images/instagram.jpg';
import lnkdinImg from '../Images/linkedin.jpg';
import twitterImg from '../Images/twitter.png';
import whatsappImg from '../Images/whatsapp.jpg';
import fbImg from '../Images/Facebook.jpg';
import Progress from '../Component/Progress';
import ProfileCard from '../Component/ProfileCard';
import huzImg from '../Images/huzaifaPic.jpg'

const Home = () => {
  return (
    <div className='overflow-hidden'>

      {/* background Image section */}
      <div className={`mt-16 pb-[190px] bg-no-repeat bg-fixed ${styles.bgimg}`}>
        <div className='pt-[170px] p-[20px] flex flex-col text-center'>
          <h1 className='text-white text-5xl font-bold'>WELCOME TO MY PORTFOLIO</h1>
          <p className='text-white text-xl mt-5'>About Me</p>
          <p class="text-white text-3xl mt-5 ">
            <span className='font-bold text-yellow-300 mr-4'>HI! THERE </span>
            <span className='italic font-semibold'>I'M MUHAMMAD HUZAIFA</span>
          </p>
        </div>
        <div className='flex justify-between flex-row mt-4 sm:ml-[2%] sm:mr-[2%] md:ml-[30%] md:mr-[30%]'>
          <a href="https://github.com/huzaifa311" target="_blank">
            <img className='w-[50px] h-[50px]' src={gitImg} alt="github" />
          </a>
          <a href="https://www.instagram.com/huzaifa_311/" target="_blank">
            <img className='w-[50px] h-[50px]' src={instaImg} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/huzaifa.kabra.9" target="_blank">
            <img className='w-[50px] h-[50px]' src={fbImg} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/in/huzaifahabib-923215271/" target="_blank">
            <img className='w-[50px] h-[50px]' src={lnkdinImg} alt="linkedIn" />
          </a>
          <a href="https://twitter.com/huzaifahabib311" target="_blank">
            <img className='w-[50px] h-[50px]' src={twitterImg} alt="Twitter" />
          </a>
          <a href="https://wa.me/+923218901245" target="_blank">
            <img className='w-[50px] h-[50px]' src={whatsappImg} alt="WhatsApp" />
          </a>

        </div>
      </div>

      {/* About & Paragraph */}
      <div className='mt-12 text-center overflow-scroll' id='about'>
        <h1 className={`text-4xl font-bold flex justify-center ${styles.textShadow}`}>     About Us
        </h1>
        <p className='mt-10 flex text-center justify-center'>An opportunity to work and upgrade oneself, as well as being involved in an organization that
          believes in gaining a competitive edge and giving back to the community.<br />
          I’m presently expanding my solid experience in UI / UX design.
          I focus on using my interpersonal skills to build good user experience and create a strong <br /> interest in my employers.
          I hope to develop skills in motion design and my
          knowledge of the Web,
          and become an honest asset to the business.<br /> As an individual, I’m self-confident you’ll
          find me
          creative, funny and naturally passionate.<br /> I’m a forward thinker, which others may
          find inspiring when
          working as a team.
        </p>
      </div>

      {/* Progress & Info */}
      <div className={`w-[100%] h-[100%] flex flex-col lg:flex-row mt-8 lg:mt-5`} >

        <div className='w-[100%] lg:w-[50%] ml-[5%] mr-[5%] '>
          <h3 className='text-xl font-semibold'>HTML 5</h3>
          <Progress color={'success'} percent={90} />
          <h3 className='mt-4 text-xl font-semibold'>CSS 3</h3>
          <Progress color={'info'} percent={75} />
          <h3 className='mt-4 text-xl font-semibold'>JAVASCRIPT</h3>
          <Progress color={'danger'} percent={80} />
          <h3 className='mt-4 text-xl font-semibold'>ES6</h3>
          <Progress color={'warning'} percent={75} />
          <h3 className='mt-4 text-xl font-semibold'>REACT JS</h3>
          <Progress color={'secondary'} percent={60} />
          <h3 className='mt-4 text-xl font-semibold'>FIREBASE</h3>
          <Progress percent={80} />
        </div>

        <div className={`w-auto lg:w-[50%] ml-0 mr-0 lg:ml-[5%] lg:mr-[5%] mt-9 lg:mt-5 pt-3 pl-3 pr-0 pb-0 rounded-2xl overflow-scroll flex flex-col justify-center ${styles.boxShadow}`}>
          <div className='flex flex-row mb-7'>
            <h3 className='text-2xl font-bold'>Name:ㅤ</h3>
            <p className='text-2xl text-purple-700'>Muhammad Huzaifa</p>
          </div>
          <div className='flex flex-row mb-7'>
            <h3 className='text-2xl font-bold'>Email:</h3>
            <p className='text-2xl text-purple-700'>huzaifahabib311@gmail.com</p>
          </div>
          <div className='flex flex-row mb-7'>
            <h3 className='text-2xl font-bold'>Phone:ㅤ</h3>
            <p className='text-2xl text-purple-700'> +923218901245</p>
          </div>
          <div className='flex flex-row mb-7'>
            <h3 className='text-2xl font-bold'>Date Of Birth:ㅤ</h3>
            <p className='text-2xl text-purple-700'>17-NOV-2005</p>
          </div>
          <div className='flex flex-row mb-7'>
            <h3 className='text-2xl font-bold'>Nationality:ㅤ</h3>
            <p className='text-2xl text-purple-700'>Pakistani</p>
          </div>
          <div className='flex flex-row mb-7'>
            <h3 className='text-2xl font-bold'>Religion:ㅤ</h3>
            <p className='text-2xl text-purple-700'>ISLAM</p>
          </div>
        </div>

      </div>

      {/* Profile Card */}
      <ProfileCard imageSrc={huzImg} name={'MUHAMMAD HUZAIFA'} email='huzaifahabib311@gmail.com' phone='+923218901245' DOB={'17-Nov-2005'} Nationality={'Pakistani'}/>

    </div>
  )
}

export default Home
