import React, { useRef } from 'react';
import Header from '../components/Header'
import BannerAbout from '../components/BannerAbout'
import GalleryProjects from '../components/GalleryProjects';
import Skills from '../components/Skills';
import Presentation  from '../components/Presentation';
import { useEffect } from 'react';
import { gsap } from "gsap";
import Footer from '../components/Footer';
import "../style/index.scss"



function Home() {
    const isHome = true;
    return (
        <div className='home'>
            <Header/>
            <main>
                <Presentation />
                <BannerAbout isHome={isHome}/>
                <GalleryProjects/>
                <Skills/>
            </main>
            <Footer/>
        </div>
    )
}
export default Home
