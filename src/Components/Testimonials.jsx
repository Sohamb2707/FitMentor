import React from 'react';
import { testimonials } from '../constants';

const Testimonials = () => {
    const titleStyle = {
        color: 'var(--span-color)', // Color for the main title
    };
    const cardStyle = {
        backgroundColor: 'var(--page-bg)', // Background color for testimonial cards
        borderColor: 'var(--div-color)', // Border color for testimonial cards
        color: 'var(--span-color)', // Text color inside the cards
    };
    const userInfoStyle = {
        color: 'var(--span-color)', // Color for user name
    };
    const companyInfoStyle = {
        color: 'var(--anchor-tags)', // Color for company name
    };

    return (
        <div className="mt-20 tracking-wide">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-10 lg:my-20" style={titleStyle}>
                What people are saying
            </h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="rounded-md p-6 text-md border font-thin" style={cardStyle}>
                            <p className='font-light'>{testimonial.text}</p>
                            <div className="flex mt-8 items-start">
                                <img src={testimonial.image} alt={testimonial.user} className='w-12 h-12 mr-6 rounded-full border' style={{ borderColor: 'var(--span-color)' }} />
                                <div>
                                    <h6 style={userInfoStyle} className='font-semibold tracking-wide'>{testimonial.user}</h6>
                                    <span className='text-sm font-normal italic' style={companyInfoStyle}>{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
