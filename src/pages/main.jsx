// import React from 'react';
// import '../css/main.css'
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import {FaReact, FaNodeJs} from 'react-icons/fa'
// import {SiMysql, SiJavascript, SiMaterialUi, SiCss3, SiHtml5, SiOracle, SiGithub, SiInstagram } from 'react-icons/si'

import {FaDribbble, FaDiscord, FaTwitter, FaGithub} from "react-icons/fa";
import Avatar from '../assets/avatar.png'
import { Image } from 'antd';

const Main=()=>{
    const getCV=()=>{
        window.open(
            'https://drive.google.com/file/d/1f8vZzXhFhEwZgBuZc7zZFPGwtx4hKdtQ/view?usp=sharing',
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    return (

            <div>
                <header className='header-container'>
                    <p>AW</p>
            
                    <div className='header-menu-container'>
                        <a href="#start">Start</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact-me">Contact Me</a>
                    </div>
                    <button className='header-button' onClick={getCV}>
                        Get CV
                    </button>
                </header>
                
                <div className='intro-container'>

                    <Image
                        className='intro-pp'
                        src={Avatar}
                        alt='Dewa Gede Angga Wijaya'
                        height={140}
                        width={140}
                    />
                    

                    <p className='intro-h1'>Hello, my name is Angga.</p>
                    <p className='intro-h2'>I could create a <span>web</span> or <span>graphic design</span> <br/>for you.</p><br />
                    <p className='intro-text'><b>Currently Seeking a challenging internship or entry-level position <br/>in a dynamic and fast-paced environment.</b></p>
                        
                    <a href="mailto:anggaa_wijaya@yahoo.com">
                        <button className='intro-button'>
                            Get in Touch
                        </button>
                    </a><br/>

                    <div className='intro-icons'>
                        <a href='https://discord.com/users/346637910721691649' target="_blank" rel="noopener noreferrer">
                            <FaDiscord/>
                        </a>
                        <a href='https://dribbble.com/mittenpuss' target="_blank" rel="noopener noreferrer">
                            <FaDribbble/>
                        </a>
                        <a href='https://github.com/mittenpuss' target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </a>
                        <a href='https://twitter.com/anggaawijaya' target="_blank" rel="noopener noreferrer">
                            <FaTwitter/>
                        </a>
                    </div>
                </div>
                        
                {/* CONTACT */}
                <div className='contact-container'>
                    
                    {/* CONTACT LEFT */}
                    <div className='contact-left'>
                        <h1>Contact</h1>
                        <p>Let’s make something creative! <br/>Amazing design just for you.</p>
                    </div>

                    {/* CONTACT RIGHT */}
                    <div className='contact-right'>
                        <h1>I craft awesome design solutions for you. Let’s message me and make <span className='contact-right-span'>something together!</span></h1>
                        
                        <form>
                            <div className='input-row'>
                                <div className="input-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input id='name' type="text" placeholder='Your Name' className='form-name' />
                                </div>

                                <div className="input-group"> 
                                    <label htmlFor="category">Category (optional)</label>
                                    <select id="category" name="category" className='form-categories-dropdown'>
                                        <option value="collaboration">Collaboration</option>
                                        <option value="making-website">Making Website</option>
                                        <option value="making-design">Making Design</option>
                                    </select>
                                </div>
                            </div>

                            <div className='input-row'>
                                <div className="input-group">
                                    <label htmlFor="email">Your Email (required)</label>
                                
                                    <input id='email' type="text" placeholder='Your Email' className='form-email'/>
                                </div>
                                
                                <div className="input-group">
                                    <label htmlFor="budget">Choose a budget (IDR)</label>
                                    <select id="budget" name="budget" className='form-budget-dropdown' >
                                        <option value="murah">Less than 1.000.000</option>
                                        <option value="sedang">1.000.000 - 10.000.000</option>
                                        <option value="mahal">More than 10.000.000</option>
                                    </select>
                                </div>
                            </div>

                            <div className="input-row-textarea">
                                <div className='input-group-textarea'>
                                    <label htmlFor="message">Your Message</label>
                                    <textarea id="message" name="message" rows="10" className='form-text-area' placeholder='Enter your message....'>
                                        </textarea>   
                                </div>
                            </div>

                                <div>
                                    <button className='form-button' type='submit' >
                                        Contact Me!
                                    </button>
                                </div>
                  
                        </form>

                        

                    </div>



                </div>

                </div>

            
                
    )
}

export default Main