import React from 'react';
import styles from '../Custom.module.css';
import ProjectCard from '../Component/ProjectCard/ProjectCard';
import blog from '../Images/main Blog.jpg';
import calculator from '../Images/calc.jpg';
import digital from '../Images/clockHuzzi.jpg';
import ecomerce from '../Images/ecommerceHuzaifa.jpg';
import food from '../Images/foodHuzaifa.jpg';
import hack from '../Images/hackHuzzi.jpg';
import saylani from '../Images/saylaniHuzzi.jpg';
import stop from '../Images/stop.jpg';
import todoReact from '../Images/TodoHuzaifa.jpg';
import login from '../Images/loginHuzzi.jpg';
import todo from '../Images/todolHuzzi.jpg';
import tour from '../Images/tourHuzzi.jpg';
import weather from '../Images/Weather.jpg';
import porfolio from '../Images/Portfolio.jpg';

const Home = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is the description of Project 1.',
      imageUrl: 'https://example.com/project-1.png'
    },
    {
      title: 'Project 2',
      description: 'This is the description of Project 2.',
      imageUrl: 'https://example.com/project-2.png'
    }
  ];
  return (
    <>
      <h1 className={`mt-24 flex justify-center text-5xl font-semibold text-black ${styles.textShadow}`}>Projects</h1>

      <div className='flex flex-wrap justify-center mt-5'>

        <ProjectCard img={blog} headingF={'BLOGGING WEB'} headingB={'Blogging Website'} para={'Blogging Website using React Js, Tailwind and FireBase'} hostingUrl={"https://blog-react-tau.vercel.app/"} key={5} />

        <ProjectCard img={porfolio} headingF={'PORTFOLIO WEBSITE'} headingB={'My Portfolio'} para={'Portfolio Website Using Html,Css & Javascript'} hostingUrl={'https://react-weather-alpha-dusky.vercel.app/'} key={2} />

        <ProjectCard img={weather} headingF={'WEATHER APP'} headingB={'React Js Weather App'} para={'Weather App by React & tailwind.'} hostingUrl={'https://react-weather-alpha-dusky.vercel.app/'} key={1} />

        <ProjectCard img={ecomerce} headingF={'ECOMMERCE'} headingB={'Ecommerce Website'} para={'Ecommerce WEBSITE USING REACTJS'} hostingUrl={"https://ecommerce-react-plum.vercel.app/"} key={4} />

        <ProjectCard img={todoReact} headingF={'REACT TODO'} headingB={'REACT TODO'} para={'TODO WEBSITE USING REACTJS'} hostingUrl={"https://todo-react-red-ten.vercel.app/"} key={3} />

        <ProjectCard img={calculator} headingF={'CALCULATOR'} headingB={'Calculator'} para={'Fully Functional Calculator.'} hostingUrl={"https://huzaifa311.github.io/calculator/"} key={13} />

        <ProjectCard img={todo} headingF={'TODO LIST'} headingB={'Todo Website'} para={'Todo List via HTML,CSS &Js'} hostingUrl={"https://huzaifa311.github.io/todo/"} key={11} />

        <ProjectCard img={digital} headingF={'DIGITAL CLOCK'} headingB={'Digital Clock Website'} para={'DigitalClockWebsite via HTML,CSS &Js'} hostingUrl={"https://huzaifa311.github.io/DigitalClock/"} key={9} />

        <ProjectCard img={hack} headingF={'HACKING PRANK'} headingB={'FAKE HACKING WEBSITE'} para={'HackingPrank Web via HTML,CSS &Js'} hostingUrl={"https://huzaifa311.github.io/HackPrank/"} key={12} />

        <ProjectCard img={food} headingF={'FOOD-PANDA'} headingB={'Food-Panda Landing Page'} para={'Food-Panda Clone via HTML, CSS & Js'} hostingUrl={"https://huzaifa311.github.io/FoodPanda/"} key={6} />

        <ProjectCard img={stop} headingF={'STOP WATCH'} headingB={'Stop Watch'} para={'Stop Watch using Html,Css & Js'} hostingUrl={"https://huzaifa311.github.io/Stop-Watch/"} key={14} />

        <ProjectCard img={saylani} headingF={'Saylani Landing Page'} headingB={'Saylani'} para={'Saylani'} hostingUrl={"https://huzaifa311.github.io/Saylani/"} key={7} />

        <ProjectCard img={tour} headingF={'TOUR'} headingB={'Tour Website'} para={'Tour Website via HTML, CSS & Js'} hostingUrl={"https://huzaifa311.github.io/TripAdvisor/"} key={8} />

        {/* <ProjectCard img={login} headingF={'LOGIN / SIGNUP'} headingB={'Login \ Signup Flip Form'} para={'Login\Signup Form via HTML,CSS &Js'} hostingUrl={"https://huzaifa311.github.io/loginFlip/"} key={10} /> */}

      </div>
    </>
  )
}

export default Home
