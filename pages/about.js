import React from 'react';
import Image from 'next/image';

function About(){
    return (
    <body>
        <div className="menu-bar">
            <ul>
                <li><a href='/'>PORTFOLIO</a></li>
                <li><a href='/sketches'>SKETCHES</a></li>
                <li><a href='https://www.artstation.com/felipericobello'>ARTSTATION</a></li>
                <li><a href='/about'>ABOUT</a></li>
                <li><a href='mailto:felipericobello@hotmail.com'>CONTACT</a></li>            
            </ul>
        </div>
    </body>
    )
}

export default About