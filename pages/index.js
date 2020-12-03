import React from 'react';
import Image from 'next/image'

function Home(){
    return (    
        <div className="menu-bar">
            <ul>
                <li><img src='/img_1.jpg'/></li>
                <li><a href='/'>PORTFOLIO</a></li>
                <li><a href='/sketches'>SKETCHES</a></li>
                <li><a href='/sketches'>ARTSTATION</a></li>
                <li><a href='/about'>ABOUT</a></li>
                <li><a href='/sketches'>CONTACT</a></li>
            </ul>
        </div>   
    )
}

export default Home