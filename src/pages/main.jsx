import React from 'react';
import '../css/main.css'

import {FaDribbble, FaDiscord, FaTwitter, FaGithub} from "react-icons/fa";
import { Space, Tag, Card, Image } from 'antd';

//IMAGES
import Avatar from '../assets/avatar.png'
import Kedas from '../assets/projects/kedas.png'
import Nyentana from '../assets/projects/nyentana.png'
import TravelU from '../assets/projects/travelU.png'
import Honkai from '../assets/projects/honkai.png'

const getCV=()=>{
    window.open(
        'https://drive.google.com/file/d/1f8vZzXhFhEwZgBuZc7zZFPGwtx4hKdtQ/view?usp=sharing',
        '_blank' // <- This is what makes it open in a new window.
      );
}



const Main=()=>{
   
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


                {/* MY PROJECTS */}
                <div className="projects-container">
                    <p>Latest Work</p>

                    <div className="projects-box">

                        {/* KEDAS */}
                        <Card title="E-Commerce Perlengkapan Upakara Bali" bordered={false} className='projects-card' size='small'>
                            <Image
                                className='projects-pp'
                                src={Kedas}
                                alt='Kedas'
                                style={{width:'100%', height:'100%'}}
                            />
                            <div className="projects-tag">
                                <Space size={[0, 8]} wrap>
                                    <Tag color="magenta">Dribbble</Tag>                                
                                    <Tag color="red">Web Design</Tag>
                                    <Tag color="volcano">Landing Page</Tag>
                                    {/* <Tag color="orange">HTML</Tag>
                                    <Tag color="gold">Javascript</Tag>
                                    <Tag color="blue">CSS</Tag>                                     */}
                                </Space>
                            </div>
                            <p>Kedas is a platform that connects waste owners with waste recyclers, it's also acts as an e-commerce. Users can buy recycled ceremonial waste, Hindu ceremonial equipment, and Balinese art. This page displays the purchase page for the Hindu prayer equipment.</p>
                            <button className='form-button'>
                                see this project!
                            </button>
                        </Card>
                        
                        {/* TRAVELU */}
                        <Card title="Travel U - Travel Landing Page" bordered={false} className='projects-card' size='small'>
                            <Image
                                className='projects-pp'
                                src={TravelU}
                                alt='Travel-U'
                                style={{width:'100%', height:'100%'}}
                            />
                            <div className="projects-tag">
                                <Space size={[0, 8]} wrap>
                                    {/* <Tag color="magenta">Dribbble</Tag>                                 */}
                                    <Tag color="red">Web Design</Tag>
                                    <Tag color="volcano">Landing Page</Tag>
                                    <Tag color="orange">HTML</Tag>
                                    <Tag color="gold">Javascript</Tag>
                                    <Tag color="blue">CSS</Tag>                                    
                                </Space>
                            </div>
                            <p>Landing Page for Traveling website, RevoU Fundamental Course Project. Users can see the top destinations from the travel agent, user review, and how to contact the travel agent</p>
                            <button className='form-button'>
                                see this project!
                            </button>
                        </Card>
                        
                        {/* NYENTANA */}
                        <Card title="Nyentana Dating Apps" bordered={false} className='projects-card' size='small'>
                            <Image
                                className='projects-pp'
                                src={Nyentana}
                                alt='Travel-U'
                                style={{width:'100%', height:'100%'}}
                            />
                            <div className="projects-tag">
                                <Space size={[0, 8]} wrap>
                                    {/* <Tag color="magenta">Dribbble</Tag>                                 */}
                                    <Tag color="magenta">Dribbble</Tag>                                
                                    <Tag color="red">Web Design</Tag>
                                    <Tag color="volcano">Landing Page</Tag>                                 
                                </Space>
                            </div>
                            <p>I made a landing page for the dating app: Nyentana. Nyentana is a marriage tradition carried out by the Balinese indigenous people in which the bride's party marries the groom's party. It's hard to find people that want to do nyentana, so i made the mockup of the website</p>
                            <button className='form-button'>
                                see this project!
                            </button>
                        </Card>

                        {/* HONKAI STAR RAILS */}
                        <Card title="Honkai Star Rails - Character Selections" bordered={false} className='projects-card' size='small'>
                            <Image
                                className='projects-pp'
                                src={Honkai}
                                alt='Travel-U'
                                style={{width:'100%', height:'100%'}}
                            />
                            <div className="projects-tag">
                                <Space size={[0, 8]} wrap>
                                    <Tag color="magenta">Dribbble</Tag>                                
                                    <Tag color="red">Web Design</Tag>                           
                                </Space>
                            </div>
                            <p>Hoyoverse newest game: Honkai Star Rail! I'm hoyoverse fans, so i remade the Honkai Star Rail character selection page from the website to my liking.</p>
                            <button className='form-button'>
                                see this project!
                            </button>
                        </Card>
                      


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