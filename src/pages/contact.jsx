import React from 'react'
import '../css/contact.css'

import Header from './header'
import Footer from './footer'

import {Divider, Tag} from 'antd'

const Contact=()=>{
    return (
        <div>
            <Header/>

                <div style={{marginRight:'15%', marginLeft:'15%'}}>
                    <Divider className='about-divider'/>
                    <h1 className='contact-title'>Contact</h1>
                    <Divider className='about-divider'/>
                </div>

              <div className='contact-container'>

                    {/* CONTACT LEFT
                    <div className='contact-left'>
                        <h1>Contact</h1>
                        <p>Let’s make something creative! <br/>Amazing design just for you.</p>
                    </div> */}

                    {/* CONTACT RIGHT */}
                    <div className='contact-right'>
                        <h1>Do you have a project in mind? Want to hire me? or simply wanna chat? Message me and let's make <span className='contact-right-span'>something together!</span></h1>
                        
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
                                    <label htmlFor="email">Your Email</label>
                                
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

                                <div style={{display:'flex', justifyContent: 'center',}}>
                                    <button className='form-button' type='submit' >
                                        Contact Me!
                                    </button>
                                </div>
                  
                        </form>

                    </div>
                </div>
                <Footer/>
        </div>
    )
}

export default Contact