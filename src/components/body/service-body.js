import React, { useEffect } from 'react';
import { AppBar } from '@material-ui/core';
import SubServiceBody from './sub-service-body';
import {assets} from "../../assets/images";
import "../../styles/services.scss";

export default function ServiceBody(props) {

    const { componentName } = props;

    const { service } = assets;
    const { heroImages, contentImage } = service;
    // const { hash } = useLocation();

    // useEffect(() => {

    //     scrollToSectionView(hash);

    // }, [hash]);
    
    return (
        <div className="service-body-cover">
            <div className="service-body-cover-flex">
                <div className="service-body-cover-item">
                    <div className="service-hero-cover-flex">
                        <div className="service-hero-cover-item">
                            <div className="hero-cover-flex">
                                <div className="hero-cover-item">
                                    <div className="hero-text-cover-flex">
                                        <div className="hero-text-cover-item">
                                            <h2 className="text-title-h">What we</h2>
                                        </div>
                                        <div className="hero-text-cover-item">
                                            <h2 className="text-title-h">Offer...</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-cover-item">
                                    <div className="hero-img-cover-flex">
                                        <div className="hero-img-cover-item">
                                            <img className="hero-img" src={heroImages[0]} alt="service hero" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-content-cover-flex">
                        <div className="service-content-cover-item">
                            <SubServiceBody componentName={componentName} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}