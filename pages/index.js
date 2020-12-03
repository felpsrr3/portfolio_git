import React from 'react';
import { Slide } from 'react-slideshow-image';
import Image from 'next/image';


import 'react-slideshow-image/dist/styles.css';

function Home(){
    return (<div>
        <div className="menu-bar">
            <ul>
                <li><a href='/'>PORTFOLIO</a></li>
                <li><a href='/sketches'>SKETCHES</a></li>
                <li><a href='https://www.artstation.com/felipericobello'>ARTSTATION</a></li>
                <li><a href='/about'>ABOUT</a></li>
                <li><a href='mailto:felipericobello@hotmail.com'>CONTACT</a></li>
            </ul>
        </div>
            <div className="slide-container">
            <Slide>
                <div className="each-slide">
                        <div>
                        <Image src='/slide2.jpg' width={800} height={500}></Image>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                        <Image src='/slide3.jpg' width={800} height={500}></Image>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                        <Image src='/slide4.jpg' width={800} height={500}></Image>
                        </div>
                    </div>
            </Slide>
      </div>
        </div>
    )
}

export default Home