// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Breadcrumb, Layout, Menu, theme} from 'antd';


// import '../css/header.css'

// const Header = () =>{

//     const {
//         token: { colorBgContainer },
//       } = theme.useToken();

//     const navigate = useNavigate()

//     const getCV=()=>{
//         window.open(
//             'https://drive.google.com/file/d/1f8vZzXhFhEwZgBuZc7zZFPGwtx4hKdtQ/view?usp=sharing',
//             '_blank' // <- This is what makes it open in a new window.
//           );
//     }

//     return (
//         <header className='header-container'>
//             <p>AW</p>
    
//             <div className='header-menu-container'>
//                 <a onClick={()=> navigate('/')} >Home</a>
//                 <a onClick={()=> navigate('/about')}>About</a>
//                 <a href="#projects">Projects</a>
//                 <a href="#contact">Contact</a>
//             </div>
//             <button className='header-button' onClick={getCV}>
//                 Get CV
//             </button>
//         </header>
//     )
// }

// export default Header

import { useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/header.css";

function Navbar() {
	
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    const navigate = useNavigate()

	return (
		<header>
			<p>AW</p>
			<nav ref={navRef}>
				<a onClick={()=> navigate('/')} >Home</a>
				<a onClick={()=> navigate('/projects')}>My work</a>
				<a href="https://anggaawijaya.wordpress.com/" target='blank' attribute >Blog</a>
				<a onClick={()=> navigate('/about')} >About me</a>
				<a onClick={()=> navigate('/contact')} >My Contact</a>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;