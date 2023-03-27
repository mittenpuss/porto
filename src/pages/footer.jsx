import React from 'react'
import '../css/footer.css'

import {FaDribbble, FaDiscord, FaTwitter, FaGithub, FaYoutube, FaCopyright, FaRegCopyright} from "react-icons/fa";


const Footer=()=>{
    return (
        <div className='footer-container'>
          <div className='footer-icons'>
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
                        <a href='https://www.youtube.com/@anggaawijaya' target="_blank" rel="noopener noreferrer">
                            <FaYoutube/>
                        </a>
                        <br />
            </div>
            <p className='footer-copyright'><FaRegCopyright/> 2023 Dewa Gede Angga Wijaya </p>  
        </div>
    )
}

export default Footer