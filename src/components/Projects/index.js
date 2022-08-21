import './index.scss';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import OneLife from "../../assets/images/onelife.png"
import { Link } from 'react-router-dom';
import Temp from "../../assets/images/Solid_gray.png";
import {animateScroll as scroll} from "react-scroll";
import Projection from "../../assets/images/projection.png"
import Wordle from "../../assets/images/wordle.png"

const Projects = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })
    
    return (
        <>
            <div className = "container projects-page">

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
            </div>
            <Loader type = "pacman"/>
        </>
    );
};

export default Projects;