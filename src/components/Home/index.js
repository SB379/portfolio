import './index.scss';
import {useState} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    // const nameArray = ['', 'S', 'i', 'd', 'd', 'h', 'a', 'r', 't', 'h']
    const textArray = ['t', 'u', 'r', 'n', 'i', 'n', 'g', ' ', 'i', 'd', 'e', 'a', 's', ' ', 'i', 'n', 't', 'o', ' ', 'r', 'e', 'a', 'l', ' ', 'l', 'i', 'f', 'e', ' ', 'p', 'r', 'o', 'd', 'u', 'c', 't', 's']

    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    })
    

    return (
        // <>
        // <div className = "container home-page">
        //     <div className = "text-zone">
        //         <h1>
        //             <span className={letterClass}>H</span>
        //             <span className={`${letterClass} _12`}>e</span>
        //             <span className={`${letterClass} _13`}>y,</span>
        //             <br/>
        //             <span className={`${letterClass} _14`}>I</span>
        //             <span className={`${letterClass} _15`}>'m </span>
        //             <AnimatedLetters
        //             letterClass = {letterClass}
        //             strArray={nameArray}
        //             idx = {15}
        //             />
        //             <br/>
        //         </h1>
        //         <h2>Full-Stack Developer / Entrepreneur / Content Creator </h2>
        //         <Link to = "/contact" className = 'flat-button'>Contact Me</Link>
        //     </div>
        //     <div className = "image-zone">
        //         {/* <img src = {Headshot} alt = "Headshot"/> */}
        //     </div>
        // </div>

        // <Loader type = "pacman"/>
        // </>

        <>
            <div class = "bg-[#F4F4FF] w-full h-full flex flex-col items-center justify-start overflow-hidden">
                <div class = "nav w-1/2 md:h-1/8 h-1/6 flex items-center justify-center">
                    <div class = "w-full h-1/2 bg-gray-900 rounded-full border shadow-2xl border-gray-500 flex items-center justify-start pl-8 md:pl-20">
                        <p class = "text-white text-3xl md:text-[36px]">Siddharth Balaji </p>
                        <p class = "text-white text-3xl md:text-[36px] animate-bounce">|</p>
                    </div>
                </div>
                <div class = "body w-[60%] h-1/2 flex flex-col items-start justify-center ">
                    {/* <p class = "text-white text-3xl md:text-[48px] pb-64 md:pb-48 md:pl-20">turning ideas into real life products</p> */}
                    <p class = "text-black text-3xl md:text-[36px] md:pb-8 pb-2">my purpose is</p>
                    <p class = "text-black text-[42px] md:text-[48px] pb-20">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray = {textArray}
                            idx = {1}
                        />
                    </p>
                    {/* <p class = "text-white text-2xl md:text-[36px] pt-8 animate">is my purpose</p> */}
                </div>
                <div class = "md:w-1/2 w-full h-1/5 flex flex-row justify-end items-start pr-20">
                    <button onClick={() => {window.location.href = 'https://siddharthbalaji.tech/projects'}} class = "text-white text-2xl bg-gray-900 border border-gray-500 shadow-2xl rounded-full h-20 w-1/2 md:w-1/4 flex items-center justify-center hover:text-black hover:bg-[#F4F4FF]">Recent Projects</button>
                </div>
            </div>
        </>
    );
};

export default Home