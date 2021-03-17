import React, {useState} from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElem';

const Hero = () => {
    const [isOpen, setOpen] = useState(false);
    
    const toggle = () => {
        setOpen(!isOpen);
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        Los Mejores Café en el Mundo
                    </HeroH1>
                    <HeroP>
                        No hay iguales
                    </HeroP>
                    <HeroBtn>
                        Pedí el tuyo
                    </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
