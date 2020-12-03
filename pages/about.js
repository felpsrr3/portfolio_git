import React from 'react';
import Image from 'next/image';

function About(){
    return (
    <body>
        <div className="menu-bar">
            <ul>
                <li><a href='/'>PORTFOLIO</a></li>
                <li><a href='/sketches'>SKETCHES</a></li>
                <li><a href='/about'>ABOUT</a></li>              
            </ul>
        </div>
    </body>
    )
}

export default About