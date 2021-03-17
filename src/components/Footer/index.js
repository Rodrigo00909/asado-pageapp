import React from 'react'

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialCreator,
    SocialIcons,
    SocialIconLink
} from './FooterElem';

import {
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Café</SocialLogo>
                        <SocialCreator>Desarrollado por: Dario Rodrigo Torres</SocialCreator>
                        <SocialIcons>
                            <SocialIconLink href="https://github.com/Rodrigo00909" target="_blank" aria-label="Git Hub">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/torresmessenzani/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
