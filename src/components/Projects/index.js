import './index.scss';
// import Loader from 'react-loaders';
import { useState, useEffect, useCallback } from 'react';
// import AnimatedLetters from '../AnimatedLetters';
import Projection from "../../assets/images/projection.png"
import Wordle from "../../assets/images/wordle.png"
import TheClub from "../../assets/images/theclub.jpg"
import OneLife from "../../assets/images/onelife.svg"
import useEmblaCarousel from 'embla-carousel-react'

const Projects = () => {
    
    // const [letterClass, setLetterClass] = useState('text-animate')
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    // })

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    
    return (
        <>
            <p className='absolute top-10 left-52  text-[48px] md:text-[64px]'>Projects</p>
            <div className='w-full h-screen overflow-hidden flex justify-center items-end'>
                <div className='w-full md:h-screen h-3/4 pb-40 md:pb-0 flex items-center justify-center flex-col md:flex-row'>
                    <button className="bg-black border border-black shadow-2xl text-white rounded-full h-20 md:w-20 w-60 mr-8 hover:bg-[#F4F4FF] hover:text-black" onClick={scrollPrev}>
                        Prev
                    </button>
                    <div className="embla md:overflow-hidden w-3/4 h-full" ref={emblaRef}>
                        <div className="embla__container flex h-full">
                            <div className="min-w-0 flex flex-col flex-grow-0 flex-shrink-0 w-full h-full justify-start items-center">
                                <div className='flex flex-row w-full h-[55%] mt-60 justify-center'>
                                    <img src = {TheClub} alt = "The Club"/>
                                </div>
                                <div className='w-full h-40 flex items-center justify-start'>
                                    <p className='text-[42px]'>TheClub</p>
                                    <button className='w-64 h-20 bg-black border border-black hover:bg-[#F4F4FF] text-white hover:text-black rounded-full text-3xl ml-12' onClick = {() => {window.open('https://theclub.lol/', '_blank')}}>
                                        Try me
                                    </button>
                                </div>
                                <div className='flex items-start justify-start h-1/4 w-full'>
                                    <p className='text-3xl'>Welcome to TheClub — where your refined taste meets top-tier spirits. Powered by the GPT-4 API, our React and Node.JS-built platform crafts a personalized journey for you. Uncover exclusive high-end liquors tailored to your unique palate, all in a sleek and intuitive design. Explore, savor, and elevate your spirits with us. Cheers to sophistication and the perfect pour!</p>
                                </div>
                            </div>
                            <div className="min-w-0 flex flex-col flex-grow-0 flex-shrink-0 w-full h-full justify-start items-center">
                                <div className='flex flex-row w-full h-[55%] mt-60 justify-center'>
                                    <img src = {OneLife} alt = "OneLife" className='w-full h-full'/>
                                </div>
                                <div className='w-full h-40 flex items-center justify-start'>
                                    <p className='text-[42px]'>OneLife</p>
                                    <button className='w-64 h-20 bg-black border border-black hover:bg-[#F4F4FF] text-white hover:text-black rounded-full text-3xl ml-12' onClick = {() => {window.open('https://testflight.apple.com/join/uNxYEDlO', '_blank')}}>
                                        Try me
                                    </button>
                                </div>
                                <div className='flex items-start justify-start h-1/4 w-full'>
                                    <p className='text-3xl'>Welcome to OneLife — your nightlife concierge! With React Native and Node.JS, our app recommends nearby bars matching your vibe, timing, and location. Real-time events and an intuitive interface make exploring the city's best spots effortless. Elevate your nights with personalized suggestions. Cheers to unforgettable experiences! </p>
                                </div>
                            </div>
                            <div className="min-w-0 flex flex-col flex-grow-0 flex-shrink-0 w-full h-full justify-start items-center">
                                <div className='flex flex-row w-full h-[55%] mt-60 justify-center'>
                                    <img src = {Wordle} alt = "Wordle"/>
                                </div>
                                <div className='w-full h-40 flex items-center justify-start'>
                                    <p className='text-[42px]'>WordleSolver</p>
                                </div>
                                <div className='flex items-start justify-start h-1/4 w-full'>
                                    <p className='text-3xl'>Introducing WordleSolver — your shortcut to Wordle victory! Powered by Python and tkinter, this app cracks the code in just 2.3 guesses on average. Enjoy a lightning-fast solving experience with a user-friendly interface. Elevate your Wordle game and conquer the daily challenge effortlessly! </p>
                                </div>
                            </div>
                            <div className="min-w-0 flex flex-col flex-grow-0 flex-shrink-0 w-full h-full justify-start items-center">
                                <div className='flex flex-row w-full h-[55%] mt-60 justify-center'>
                                    <img src = {Projection} alt = "Projection Mapping Software"/>
                                </div>
                                <div className='w-full h-40 flex items-center justify-start'>
                                    <p className='text-[42px]'>Projection Mapping Software</p>
                                </div>
                                <div className='flex items-start justify-start h-1/4 w-full'>
                                    <p className='text-3xl'>Introducing Real-Time Projection Mapping software, a Python-driven marvel in mobile object projection mapping. Leveraging OpenCV and NumPy, this software pioneers dynamic visuals on mobile objects. Featuring a specialized Centroid Tracking Algorithm, it efficiently processes 200,000 data points for precise motion detection and optimal projection angles. Designed for experimental research based ultrasonic levitation devices, it's built for cutting-edge interactive experiences. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="bg-black border border-black shadow-2xl text-white rounded-full h-20 md:w-20 w-60 ml-8 hover:bg-[#F4F4FF] hover:text-black" onClick={scrollNext}>
                        Next
                    </button>
                </div>
            </div>

            {/* <div className = "container projects-page">

                <h1>
                    <AnimatedLetters
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx = {15}
                        letterClass = {letterClass}
                    />
                </h1>

                <div className = 'project-one'>
                    <h2>Real-Time Projection Mapping</h2>
                    <div className = "project-one-info">
                        <p>
                        Over the course of my freshman year at Stevens, I had the opportunity of leading an independent research team in the development of Real-Time Projection Mapping software.
                                    Developed in Python, libraries like OpenCV and NumPy were implemented for computer vision and tracking. 
                        </p>
                        <img src = {Projection} alt = "Projection Mapping"/>
                    </div>
                </div>

                <div className = 'project-two'>
                    <h2>Wordle Solving Algorithm</h2>
                    <div className = 'project-two-info'>
                        <img src = {Wordle} alt = 'Wordle Algorithm Interface'/>
                        <p>
                        When Wordle became a popular daily pastime among friends, I decided to take the game and apply an algorithmic approach. This forced me to think about what information we're given when we see a gray, yellow, and 
                        green letter as well as what the optimal guess may be. This enabled me to consistently beat my friends best attempts and average 3 guesses per day. While initially implemented using Java, a GUI and improved algorithm was implemented with Python.
                        </p>
                    </div>
                </div>

                <div className = 'project-three'>
                    <h2>OneLife</h2>
                    <div className='project-three-info'>
                        <p>
                        After feeling extremely stuck during the Pandemic, I decided to take my skills and build an app that could answer the question "What are we going to do today?" As an ongoing project with the hopes of one day launching a company centered around the app, I'm continually
                        building using JS, React, and Solidity to bring Web3.0 to online booking.
                        </p>
                        <img src = {OneLife} alt = "OneLife Logo"/>
                    </div>
                </div>
            </div> */}
            {/* <Loader type = "pacman"/> */}
        </>
    );
};

export default Projects;