import React, { useRef } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import "../style/index.scss"
import GalleryProjects from '../components/GalleryProjects';

function Project() {
    return (
        <div className='project'>
            <Header/>
                <main>
                    <GalleryProjects/>
                </main>
            <Footer/>
        </div>
    )
}
export default Project
