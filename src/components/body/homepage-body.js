import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import {assets} from "../../assets/images";
import TextTransition, {presets} from 'react-text-transition';
import DialogComponent from '../dialog';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Carousel from 're-carousel';
import IndicatorDots from './carousel/indicator-dots';
import CarouselButtons from './carousel/carousel-buttons';
import { testimonialProps, testimonialProps as TESTIMONIAL_PROPS } from './testimonial-props';
import Testimonials from './testimonials';

export default function HomepageBody(props) {

    const { dialogComponentProps } = props;
    const { handleDialogOpen, handleDialogClose, dialogOpen, componentType, dialogType } = dialogComponentProps;

    const { homepage, testimonial } = assets;
    const { heroImages, mifosImages, usersImages, contactImages, clientImages, technologyImages } = homepage;
    const { testimonialImages } = testimonial;

    const [index, setIndex] = useState(0);

    const TEXTS = [
        "setup",
        "migrate to",
        "integrate",
        "configure",
        "upgrade",
        "maintain",
        "rent"
    ];

    // scroll to view code here
    const { hash } = useLocation();

    // props object for dialog component
    const dialogProps = {
        handleDialogClose,
        dialogOpen,
        componentType,
        dialogType
    }

    useEffect(() => {

        const intervalId = setInterval(() => {
            setIndex(index => index + 1);
        }, 3000)

        return () => clearTimeout(intervalId);

    }, []);

    useEffect(() => {

        if(hash !== '' && hash !== '#') {

            var hashArr = hash.split('#');
            var sectionElemId = hashArr.pop();

            var sectionElem = document.getElementById(`${sectionElemId}`);

            sectionElem.scrollIntoView({
                block: "start",
                behavior: "smooth"
            })
        }

    }, [hash])

    return (
        <div className="homepage-body-cover">
            <DialogComponent dialogProps={dialogProps}/>
            <Helmet>
                <title>Paycore Solutions | Your One Stop Vendor For Fast and Reliable Core Banking Solution</title>
            </Helmet>
            <div className="homepage-body-hero-cover-flex">
                <div className="homepage-body-hero-cover-item">
                    <div className="hero-cover-flex">
                        <div className="hero-cover-item">
                            <div className="hero-text-btn-cover-flex">
                                <div className="hero-text-btn-cover-item">
                                    <div className="hero-text-cover-flex">
                                        <div className="hero-text-cover-item">
                                            <div className="title-cover">
                                                <h2 className="title-h">
                                                    Looking to <TextTransition 
                                                            text={TEXTS[index % TEXTS.length]}
                                                            springConfig={presets.wobbly}
                                                            direction="up"
                                                            inline={true}
                                                            delay={1}
                                                            style={{
                                                                color: "rgb(255, 208, 0)"
                                                            }}
                                                    /> a new core banking infrastructure?
                                                </h2>
                                            </div>
                                            <div className="subtitle-cover">
                                                <h4 className="subtitle-h">Let's get you up and running with the Mifos-x core banking platform today!</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hero-btn-cover-flex">
                                        <div className="hero-btn-cover-item">
                                            <div className="btn-cover-flex">
                                                <div className="btn-cover-item">
                                                    <Button 
                                                        className="btn-elem" 
                                                        type="button" 
                                                        variant="contained" 
                                                        color="primary"
                                                        onClick={(componentType, dialogType) => handleDialogOpen("request-demo", "form")}
                                                    >Request Demo</Button>
                                                </div>
                                                <div className="btn-cover-item">
                                                    <Button 
                                                        className="btn-elem" 
                                                        type="button" 
                                                        variant="outlined" 
                                                        color="primary"
                                                        onClick={(componentType, dialogType) => handleDialogOpen("get-quotes", "form")}
                                                    >Get Quote</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-cover-item">
                            <div className="image-outer-cover-flex">
                                <div className="image-outer-cover-item">
                                    <div className="image-cover-flex">
                                        <div className="image-cover-item">
                                            {/* <img className="hero-img" src={heroImages[1]} alt="hero images" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* <div className="homepage-body-tech-section-flex">
                <div className="homepage-body-tech-section-item">
                    <div className="section-tech-cover">
                        <div className="tech-header-cover-flex">
                            <div className="tech-header-cover-item">
                                <h2 className="header-title">Powered by the best technologies:</h2>
                            </div>
                        </div>
                        <div className="tech-image-cover-flex">
                            <div className="tech-image-cover-item">
                                <div className="image-card-flex">
                                    <div className="image-card-item">
                                        <div className="image-cover-flex">
                                            <div className="image-cover-item">
                                                <img className="tech-img" src={technologyImages[0]} alt="tech" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-card-item">
                                        <div className="image-cover-flex">
                                            <div className="image-cover-item">
                                                <img className="tech-img" src={technologyImages[1]} alt="tech" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-card-item">
                                        <div className="image-cover-flex">
                                            <div className="image-cover-item">
                                                <img className="tech-img" src={technologyImages[2]} alt="tech" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-card-item">
                                        <div className="image-cover-flex">
                                            <div className="image-cover-item">
                                                <img className="tech-img" src={technologyImages[3]} alt="tech" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-card-item">
                                        <div className="image-cover-flex">
                                            <div className="image-cover-item">
                                                <img className="tech-img" src={technologyImages[4]} alt="tech" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="homepage-body-why-section-flex">
                <div className="homepage-body-why-section-item">
                    <div className="section-why-cover">
                        <div className="why-header-cover-flex">
                            <div className="why-header-cover-item">
                                <h2 className="header-title"><span className="inline-color">What</span> is paycore</h2>
                            </div>
                        </div>
                        <div className="why-content-cover-flex">
                            <div className="why-content-cover-item">
                                <div className="why-text-cover-flex">
                                    <div className="why-text-cover-item">
                                        <div className="text-cover">
                                            <div className="title-desc-cover">
                                                <p className="desc-p">Paycore is an implementation oriented services, performed with various core software infrastructure, and served to financial organisations and institutions to enable them run a smooth and efficient financial operation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="homepage-body-user-section-flex" id="products">
                <div className="homepage-body-user-section-item">
                    <div className="section-user-cover">
                        <div className="user-header-cover-flex">
                            <div className="user-header-cover-item">
                                <h2 className="header-title"><span className="inline-color">Our</span> products</h2>
                            </div>
                        </div>
                        <div className="user-content-cover-flex0">
                            {/* <div className="user-content-cover-item">
                                <div className="user-image-cover-flex">
                                    <div className="user-image-cover-item">
                                        <img className="user-img" src={usersImages[0]} alt="user banks" />
                                    </div>
                                </div>
                            </div> */}
                            <div className="user-content-cover-item">
                                <div className="user-text-cover-flex">
                                    <div className="user-text-cover-item">
                                        <div className="text-cover">
                                            {/* <div className="title-header-cover">
                                                <h2 className="title-h">Mifos-x and Fineract core banking platform</h2>
                                            </div> */}
                                            <div className="title-desc-cover">
                                                <div className="desc-cover-flex">
                                                    <p className="desc-p">Paycore products are wide range of core software infrastructures that are carefully selected, researched on and are proven time and time again to meet with industry standards. They are future fits, industry-specific ERP software solutions that helps financial institutions run at optimum capacity and exceeds custumers expectations. <span className="inline-color"><i>See our feature products below:</i></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="user-content-cover-flex">
                            <div className="user-content-cover-item">
                                <div className="user-text-cover-flex">
                                    <div className="user-text-cover-item">
                                        <div className="text-cover">
                                            <div className="title-header-cover">
                                                {/* <h2 className="title-h">Mifos-x and Fineract core banking platform</h2> */}
                                            </div>
                                            <div className="title-desc-cover">
                                                <p className="desc-p">Mifos-x platform has been designed to run and deployed effectively on any device environment, be it cloud based or your local machine such as Windows, Ubuntu, and Mac. So whether you're looking to begin a fresh installation on your current environment, or you're planning to migrate to another one, Paycore is fully equipped to provide the best implementation services to get you up and running with Mifos-x in no time!</p>
                                                {/* <ul className="desc-ul">
                                                    <li className="desc-li">Mifos core banking platform</li>
                                                    <li className="desc-li">Infoware</li>
                                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-content-cover-item">
                                <div className="user-image-cover-flex">
                                    <div className="user-image-cover-item">
                                        <img className="user-img" src={usersImages[1]} alt="user banks" />
                                    </div>
                                    <h2 className="image-title-h">Mifos-x Fineract core banking platform</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="homepage-body-service-section-flex" id="services">
                <div className="homepage-body-service-section-item">
                    <div className="section-service-cover">
                        <div className="service-header-cover-flex">
                            <div className="service-header-cover-item">
                                <h2 className="header-title"><span className="inline-color">Our</span> services</h2>
                            </div>
                        </div>
                        <div className="service-content-cover-flex">
                            <div className="service-content-cover-item">
                                <div className="service-text-cover-flex">
                                    <div className="service-text-cover-item">
                                        <div className="text-cover">
                                            <div className="title-desc-cover">
                                                <p className="desc-p">Due to the wide variations of implementation use case, paycore services are been provided in various categories as it fits your organizational requirements. Click below to view some of the current services we provide.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-btn-cover-flex">
                                    <div className="service-btn-cover-item">
                                        <Button 
                                            className="btn-elem" 
                                            type="button" 
                                            variant="contained" 
                                            color="primary"
                                            onClick={(componentType, dialogType) => handleDialogOpen("view-services", "services")}
                                        >View services</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial-carousel-cover-flex">
                <div className="testimonial-carousel-cover-item">
                    <div className="testimonial-header-cover-flex">
                        <div className="testimonial-header-cover-item">
                            <h2 className="testimonial-h">Some of the industry player's experience with paycore:</h2>
                        </div>
                    </div>
                    <div className="testimonial-inner-secton-flex">
                        <div className="testimonial-inner-secton-item">
                            <div className="testimonial-inner-section-image-flex">
                                <div className="testimonial-inner-section-image-item">
                                    <img className="section-img" src={testimonialImages[3]} alt="section image" />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-inner-secton-item">
                            <Carousel loop auto widgets={[IndicatorDots]}>
                                {
                                    TESTIMONIAL_PROPS.map((testimonialProp, index) => {
                                        
                                        return (
                                            <Testimonials testimonialProp={testimonialProp} indexKey={index} />
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="homepage-body-callus-section-flex">
                <div className="homepage-body-callus-section-item">
                    <div className="callus-cover-flex">
                        <div className="callus-cover-item">
                            <div className="callus-text-btn-cover-flex">
                                <div className="callus-text-btn-cover-item">
                                    <div className="callus-text-cover-flex">
                                        <div className="callus-text-cover-item">
                                            <h2 className="callus-text-h"><span className="inline-color">We Work,</span> Together</h2>
                                            <p className="callus-text-p">It has always remained our organizational top ethos of perfomance to place customers as major stakeholders/key players in all our achivements.<br /><br /> </p>
                                            <p className="callus-text-p">In as much as the responsibility to provide quality implementation services rest within our recommended skill sets, we also strive hard to ensure that our doors remains open to more business ideas and feedbacks that helps us grow and provide betther services to all our esteemed customers. <br /><br /></p>
                                            <p className="callus-text-p">Contact our team today for more discussions on business and services, we respond immediately!</p>
                                        </div>
                                    </div>
                                    <div className="callus-btn-cover-flex">
                                        <div className="callus-btn-cover-item">
                                            <Button 
                                                className="callus-btn" 
                                                type="button" 
                                                variant="outline" 
                                                color="primary"
                                                onClick={(componentType, dialogType) => handleDialogOpen("send-email", "form")}
                                            >Get in touch</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="callus-cover-item">
                            <div className="callus-img-cover-flex">
                                <div className="callus-img-cover-item">
                                    <img className="callus-img" src={contactImages[1]} alt="callus" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}