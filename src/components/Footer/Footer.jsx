import React from 'react';

import socialMedia from '../../api/index';
import { FooterContent } from '../styleComponents/index';









const Footer = () => {

    React.useEffect(() => {
        return () => () => socialMedia;
    },[])
    return <>
        <FooterContent className='footer_content'>
            <nav className='nav__footer--content'>
                <div className='span_tab'></div>
                <ol className='nav__footer--list'>
                    {socialMedia.map(({ id, socialMedia, url }) => (
                        <li key={id} className='li_footer--social'>
                            <a href={`${socialMedia}`} target='__blank' className='social_link'>
                                <img width='120' src={`${url}`} alt={socialMedia} />
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
            <div className='footer_autor'>
                <h3>&copy; Develop by @RomeoDev <span>{new Date().getFullYear()}</span></h3>
    
            </div>
        </FooterContent>
    </>
}

export default Footer;