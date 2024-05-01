import React, { useRef } from 'react';
import Header from '../components/Header'
import BannerAbout from '../components/BannerAbout'
import Footer from '../components/Footer';

function About() {
    const isHome = false;
    return (
        <div className='about-page'>
            <Header/>
                <main>
                    <BannerAbout isHome={isHome}/>
                </main> 
            <Footer/>
        </div>
    )
}
export default About
