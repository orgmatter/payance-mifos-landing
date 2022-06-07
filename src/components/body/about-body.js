import React, { useEffect } from 'react';
import { AppBar } from '@material-ui/core';
import {assets} from "../../assets/images";
import { useLocation } from 'react-router-dom';
import { scrollToSectionView } from '../ui-helper';
import "../../styles/services.scss";

export default function AboutBody(props) {

    const {  } = props;

    const { service } = assets;
    const { heroImages, contentImage } = service;
    const { hash } = useLocation();

    useEffect(() => {

        scrollToSectionView(hash);

    }, [hash]);
    
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
                                            <h2 className="text-title-h">Who we</h2>
                                        </div>
                                        <div className="hero-text-cover-item">
                                            <h2 className="text-title-h">Are...</h2>
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
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}