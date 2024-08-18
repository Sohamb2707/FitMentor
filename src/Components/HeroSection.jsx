import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

const HeroSection = () => {

    const divStyle = {
        color: 'var(--div-color)',
    };
    const spanStyle = {
        color: 'var(--span-color)',
    };
    const pStyle = {
        color: 'var(--anchor-tags)',
    };
    const btn1={
        color:'var(--span-color)',
        background:'var(--header-bg)',
   };
   const btn2={
    background:'var(--span-color)',
    color:'var(--page-bg)',
};
    return (
        <div>
            <div className="flex flex-col items-center mt-4 lg:mt-12">
                <div className="text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide" style={divStyle}>
                     Your Fitness,
                    <span className="bg-gradient-to-r  text-transparent bg-clip-text" style={spanStyle}>
                        {" "}Your Way
                    </span>
                    <p className="mt-8 text-sm sm:text-base lg:text-md text-center  max-w-3xl mx-auto" style={pStyle}>
                    Whether you’re looking to lose weight, build muscle, or simply lead a healthier lifestyle, our expert coaches and tailored programs will guide you every step of the way.
                    </p>
                    <div className="flex justify-center my-8">
                        <a href="#" className="bg-gradient-to-r  py-2 px-4 rounded-md text-sm sm:text-base font-light" style={btn1}>Get Started</a>
                        <a href="#" className="px-4 py-2 mx-3 rounded-md border text-sm sm:text-base" style={btn2}>Learn More</a>
                    </div>
                    <div className="flex mt-8 justify-center">
                       <img src={image1} alt={image1} className='rounded-lg w-5/12 mx-2 my-4' />
                       <img src={image2} alt={image2} className='rounded-lg w-5/12 mx-2 my-4'/>
      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
