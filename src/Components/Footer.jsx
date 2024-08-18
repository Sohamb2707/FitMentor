import React from 'react';
import { resourcesLinks, platformLinks, communityLinks } from '../constants';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'var(--footer-bg)', // Footer background gradient
        color: 'var(--span-color)', // Default text color
    };
    const titleStyle = {
        color: 'var(--div-color)', // Section titles
    };
    const linkStyle = {
        color: 'var(--span-color)', // Link color
    };
    const linkHoverStyle = {
        color: 'var(--header-bg)', // Link hover color
    };

    return (
        <footer className='mt-20 border-t py-10 border-neutral-700' style={footerStyle}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className='text-lg font-semibold mb-4' style={titleStyle}>Resources</h3>
                        <ul className='space-y-2'>
                            {
                                resourcesLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} 
                                           className='hover:text-white' 
                                           style={{ ...linkStyle, ':hover': linkHoverStyle }}>
                                            {link.text}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4' style={titleStyle}>Platform</h3>
                        <ul className='space-y-2'>
                            {
                                platformLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} 
                                           className='hover:text-white' 
                                           style={{ ...linkStyle, ':hover': linkHoverStyle }}>
                                            {link.text}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4' style={titleStyle}>Community</h3>
                        <ul className='space-y-2'>
                            {
                                communityLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} 
                                           className='hover:text-white' 
                                           style={{ ...linkStyle, ':hover': linkHoverStyle }}>
                                            {link.text}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
