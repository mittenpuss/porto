import React from 'react';
import '../css/projects.css';

import Footer from './footer'
import NavBar from './header'

import { useNavigate } from 'react-router-dom'


import { Space, Tag, Card, Image, Divider } from 'antd';
import { TypeAnimation } from 'react-type-animation';
// import {Fade, Slide} from 'react-reveal';

//IMAGES
import Avatar from '../assets/avatar.png'
import Kedas from '../assets/projects/kedas.png'
import Nyentana from '../assets/projects/nyentana.png'
import TravelU from '../assets/projects/travelU.png'
import Honkai from '../assets/projects/honkai.png'
import TupoksiPeruri from "../assets/projects/tupoksiPeruri.png"
import RekrutmenPeruri from "../assets/projects/rekrutmenPeruri.png"
import AsesmenPeruri from "../assets/projects/asesmenPeruri.png"

const Work=()=>{
   
    const navigate = useNavigate()

    return (

            <div>
            <NavBar/>

                <div style={{marginRight:'15%', marginLeft:'15%'}}>
                    <Divider className='about-divider'/>
                    <h1 className='projects-title'>My Work</h1>
                    <Divider className='about-divider'/>
                </div>
                
                {/* MY PROJECTS */}
                <div className="projects-container">
                    
                    <div className="projects-box">

                        {/*  */}
                        <Card title="Sistem Pengelolaan Data Asesmen" bordered={false} className='projects-card' size='small'>
                            <Image
                                className='projects-pp'
                                src={AsesmenPeruri}
                                alt='Asesmen'
                                style={{width:'100%', height:'100%'}}
                            />
                            <div className="projects-tag">
                                <Space size={[0, 8]} wrap>                               
                                    <Tag color="magenta">Dribbble</Tag>                                
                                    <Tag color="red">Web Design</Tag>
                                    
                                    {/* <Tag color="orange">HTML</Tag>
                                    <Tag color="gold">Javascript</Tag>
                                    <Tag color="blue">CSS</Tag>*/}
                                </Space>
                            </div>
                            <p>The system aims to make the process of managing employee assessment data at Peruri more efficient, accurate, and informative.</p>
                            <button className='form-button'>
                                see this project!
                            </button>
                        </Card>

                        {/* SKEP DAN TUPOKSI PERURI */}
                        <Card title="SKEP dan Tupoksi Peruri" bordered={false} className='projects-card' size='small'>
                            <Image
                                className='projects-pp'
                                src={TupoksiPeruri}
                                alt='Tupoksi'
                                style={{width:'100%', height:'100%'}}
                            />
                            <div className="projects-tag">
                                <Space size={[0, 8]} wrap>                               
                                    <Tag color="red">Web Design</Tag>
                                    <Tag color="geekblue">React JS</Tag>
                                    <Tag color="gold">Javascript</Tag>
                                    <Tag color="orange">HTML</Tag>
                                    <Tag color="blue">CSS</Tag>
                                    <Tag color="green">MySQL</Tag>
                                    
                                    {/* <Tag color="orange">HTML</Tag>
                                    <Tag color="gold">Javascript</Tag>
                                    <Tag color="blue">CSS</Tag>*/}
                                </Space>
                            </div>
                            <p>SKEP and TUPOKSI Peruri is a system for employees to see the main duties and responsibilities of each division and the decrees that are currently in effect.</p>
                            <button className='form-button'>
                                see this project!
                            </button>
                        </Card>

                        {/* Rekrutmen Peruri */}
                        <Card title="Sistem Rekrutmen Peruri" bordered={false} className='projects-card' size='small'>
                            <Image
                                className='projects-pp'
                                src={RekrutmenPeruri}
                                alt='Tupoksi'
                                style={{width:'100%', height:'100%'}}
                            />
                            <div className="projects-tag">
                                <Space size={[0, 8]} wrap>                               
                                    <Tag color="magenta">Dribbble</Tag>                                
                                    <Tag color="red">Web Design</Tag>
                                    <Tag color="volcano">Landing Page</Tag>
                                    {/* <Tag color="orange">HTML</Tag>
                                    <Tag color="gold">Javascript</Tag>
                                    <Tag color="blue">CSS</Tag>*/}
                                </Space>
                            </div>
                            <p>It's an recruitment system, where candidate can apply for job openings.</p>
                            <button className='form-button'>
                                see this project!
                            </button>
                        </Card>

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
                                <a href='' >

                                see this project!

                                </a>
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


            {/* FOOTER */}
            <Footer/>

            </div>

            
                
    )
}



export default Work