import React from 'react';

export default function Testimonials(props) {

    const { testimonialProp, indexKey } = props;
    
    return (
        <>
            <div className="testimonial-cover-flex" key={indexKey}>
                <div className="testimonial-cover-item">
                    <div className="testimonial-logo-text-cover-flex">
                        <div className="testimonial-logo-text-cover-item">
                            <div className="logo-text-cover-flex">
                                <div className="logo-text-cover-item">
                                    <div className="logo-cover-flex">
                                        <div className="logo-cover-item">
                                            <img className="logo-img" src={testimonialProp.companyLogo} alt="testimonial-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="logo-text-cover-item">
                                    <div className="text-cover-flex">
                                        <div className="text-cover-item">
                                            <h2 className="text-h">{testimonialProp.testimonialInfo}</h2>
                                            <span className="text-quote-span-left">"</span>
                                            {/* <span className="text-quote-span-right">"</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-name-cover-flex">
                                <div className="testimonial-name-cover-item">
                                    <div className="name-cover-flex">
                                        <div className="name-cover-item">
                                            <p className="name-p"><b>{testimonialProp.authorName}</b> - {testimonialProp.companyName}, {testimonialProp.companyLoc}</p>
                                        </div>
                                        <span className="strike-line-span"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 