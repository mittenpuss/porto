import React from 'react';
import '../css/main.css';

import Footer from './footer'
import NavBar from './header'

import { useNavigate } from 'react-router-dom'


import { Space, Tag, Card, Image } from 'antd';
import { TypeAnimation } from 'react-type-animation';
import {Fade, Slide} from 'react-reveal';

//IMAGES
import Avatar from '../assets/avatar.png'
import Kedas from '../assets/projects/kedas.png'
import Nyentana from '../assets/projects/nyentana.png'
import TravelU from '../assets/projects/travelU.png'
import Honkai from '../assets/projects/honkai.png'


// const getCV=()=>{
//     window.open(
//         'https://drive.google.com/file/d/1f8vZzXhFhEwZgBuZc7zZFPGwtx4hKdtQ/view?usp=sharing',
//         '_blank' // <- This is what makes it open in a new window.
//       );
// }



const Main=()=>{
   
    const navigate = useNavigate()

    return (

            <div className='testings'>
                <NavBar/>

                <div className='intro-container'>
                
                    <Image
                        className='intro-pp'
                        src={Avatar}
                        alt='Dewa Gede Angga Wijaya'
                        height={140}
                        width={140}
                    />
                
                    <p className='intro-h1'>Hello, my name is Angga.</p>
                    
                    <p className='intro-h2'>I could create
                        <TypeAnimation
                            sequence={[
                                // Same String at the start will only be typed once, initially
                                ' website',
                                1500,
                                ' graphic design',
                                1500,
                                ' UI/UX',
                                1500,
                            ]}
                            speed={40}
                            repeat={Infinity}
                        />
                    </p>
                    <p className='intro-h3'>for you</p>
                    <p className='intro-text'><b>Currently Seeking a challenging internship or entry-level position <br/>in a dynamic and fast-paced environment.</b></p>
                        
                    
                    <div>
                        <button className='intro-button'>
                            <a onClick={()=> navigate('/contact')}>
                                Get in Touch
                            </a><br/>
                        </button>

                        <button className='intro-button' onClick={()=> navigate('my-cv')}>
                                Get CV  
                        </button>
                    </div>
                    
                </div>

            {/* FOOTER */}
            <Footer/>


            </div>

            
                
    )
}



export default Main