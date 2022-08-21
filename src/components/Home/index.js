import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss';
import {useState} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { useEffect } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['', 'S', 'i', 'd', 'd', 'h', 'a', 'r', 't', 'h']

    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    })
    

    return (
        <>
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>
                    <AnimatedLetters
                    letterClass = {letterClass}
                    strArray={nameArray}
                    idx = {15}
                    />
                    <br/>
                </h1>
                <h2>Full-Stack Developer / Entrepreneur / Content Creator </h2>
                <Link to = "/contact" className= 'flat-button'>Contact Me</Link>
            </div>
        </div>

        <Loader type = "pacman"/>
        </>
    );
};

export default Home