import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCss3, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {


    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })
    
    return (
        <>
        <div className = 'container about-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A','b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx = {15}
                        letterClass = {letterClass}
                    />
                </h1>

                <h2>
                    Hi, my name is Siddharth.
                </h2>

                <p>
                I'm currently a student pursuing  a Bachelor's of Science in Computer Science at Stevens Institute of Technology. 
                Austin born, Princeton raised with a passion for programming and creative problem solving that will help your business
                </p>
                <p>Throughout High School I’ve worked at both 24 and 10 screen AMC Theaters where I was given the opportunity to develop my communication skills by interfacing with thousands of guests daily. Here, I learned about sales and leadership through the Stubs membership program while being expected to consistently hit sales targets. Additionally, I’ve gained experience in STEM by leading my district robotics team (FRC 1923: The MidKnight Inventors) as a Mechanical Captain. Currently, I’m preparing to enter my second year at Stevens Institute of Technology by working on independent programming projects, contributing to open source projects, and more. </p>
                <p>As for my future, I hope to work alongside a talented team of software engineers, creating computational solutions to our world's dilemmas. </p>
            </div>

            <div className = 'stage-cube-cont'>
                <div className = 'cubespinner'>
                    <div className = 'face1'>
                        <FontAwesomeIcon icon = {faJava} color = "#f89820"/>
                    </div>
                    <div className = 'face2'>
                        <FontAwesomeIcon icon = {faHtml5} color = "#F06529"/>
                    </div>
                    <div className = 'face3'>
                        <FontAwesomeIcon icon = {faCss3} color = "#28A4D9"/>
                    </div>
                    <div className = 'face4'>
                        <FontAwesomeIcon icon = {faReact} color = "#5ED4F4"/>
                    </div>
                    <div className = 'face5'>
                        <FontAwesomeIcon icon = {faJsSquare} color = "#EFD81D"/>
                    </div>
                    <div className = 'face6'>
                        <FontAwesomeIcon icon = {faPython} color = "#4B8BBE"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type = 'pacman'/>
        </>
    )

}


export default About;