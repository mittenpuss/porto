import React from 'react';
import '../css/myCV.css';

import Header  from '../pages/header';

import { useNavigate } from 'react-router-dom'
import CV from '../assets/cv-new-2023.png'

import getmyCV from "../assets/anggawijaya-cv-pdf.pdf"

const MyCV=()=>{

    // const navigate = useNavigate()

    const handleDownload = () =>{
        const link = document.createElement('a')
        link.download = "anggawijaya-cv"
        link.href = getmyCV
        link.click()
    }

    return (
        <div>
            <Header/>
            <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
                <button className='intro-button' onClick={handleDownload}>Save as PDF</button>
                <img src={CV} alt="" style={{width:'60%'}}/>

            </div>
        </div>
    )
}

export default MyCV