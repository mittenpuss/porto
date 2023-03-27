import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/header.css'

const Header = () =>{

    const navigate = useNavigate()

    const getCV=()=>{
        window.open(
            'https://drive.google.com/file/d/1f8vZzXhFhEwZgBuZc7zZFPGwtx4hKdtQ/view?usp=sharing',
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    return (
        <header className='header-container'>
            <p>AW</p>
    
            <div className='header-menu-container'>
                <a onClick={()=> navigate('/')} >Home</a>
                <a onClick={()=> navigate('/about')}>About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <button className='header-button' onClick={getCV}>
                Get CV
            </button>
        </header>
    )
}

export default Header