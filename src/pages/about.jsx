import React from 'react';
import '../css/about.css'

import Footer from './footer';
import Header from './header';
import Avatar from '../assets/avatar.png';

import { Divider, Image, Tag, Space } from 'antd'


const About=()=>{

    const getCV=()=>{
        window.open(
            'https://drive.google.com/file/d/1f8vZzXhFhEwZgBuZc7zZFPGwtx4hKdtQ/view?usp=sharing',
            '_blank' // <- This is what makes it open in a new window.
          );
    }


    return (
    <div style={{marginRight:'15%', marginLeft:'15%'}}>
        <Header/>
        <h1 className='about-title'>About</h1>
        <Divider className='about-divider'/>
        
        <div className='about-container'>
            <div className='about-left'>
                <Image
                className='intro-pp'
                src={Avatar}
                alt='Dewa Gede Angga Wijaya'
                height={150}
                width={150}
            />

            <p className='test'>Dewa Gede Angga Wijaya</p>
            <p>Graduate Student at University of Indonesia</p>


            </div>

            <div className='about-right'>
                <p className='about-text'>Highly motivated Information Technology magister student, with a strong background in computer science. </p>
                <br />
                <p className='about-text'>Experienced in web development and agile development methodologies. Skilled in developing and implementing technical solutions to complex problems, focusing on user experience and performance. </p>
                <br />
                <p className='about-text'>Seeking a challenging internship or entry-level position in a dynamic and fast-paced environment.</p> 
                <br />
                <button className='about-button' onClick={getCV}>
                        Get CV
                </button>

                <h1 className='about-skills'>Skills</h1>
                <div>
                <Space size={[0, 8]} wrap>
                    <Tag color="magenta">Figma</Tag>                                
                    <Tag color='cyan'>React JS</Tag>
                    <Tag color='geekblue'>React Native</Tag>
                    <Tag color='geekblue'>mySQL</Tag>
                    <Tag color='geekblue'>AWS</Tag>
                    <Tag color='geekblue'>SCRUM</Tag>
                </Space>
                </div>

            </div>
      
        </div>

        <Footer/>
    </div>
    
    )
    
}

export default About