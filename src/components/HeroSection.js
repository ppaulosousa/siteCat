import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>Arte e Arquitetura</h1>
            <p>Conheça meu dom, minhas artes</p>
        </div>
    )
}

export default HeroSection;
