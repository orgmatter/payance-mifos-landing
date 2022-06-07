import React from 'react';
import { Email, EmailOutlined, Facebook, FaceOutlined, Instagram, LinkedIn, PhoneCallback, Twitter } from '@material-ui/icons';
import {assets} from "../../assets/images";
import "../../styles/footer.scss";

export default function Footer(props) {

    const { dialogComponentProps } = props;

    const {  } = dialogComponentProps;

    const { header, footer } = assets;
    const { headerImages } = header;
    const { footerImages } = footer;
    
    return (
        <div className="footer-cover">
            <div className="footer-cover-flex">
                <div className="footer-cover-item">
                    <div className="footer-content-cover-flex1">
                        <div className="footer-content-cover-item">
                            <div className="logo-cover-flex">
                                <div className="logo-cover-item">
                                    <img className="footer-logo" src={headerImages[0]} alt="footer logo" />
                                </div>
                            </div>
                            <div className="logo-addr-cover-flex">
                                <div className="logo-addr-cover-item">
                                    <p className="addr-p">44 Falolu Street, Surulere, Lagos</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content-cover-item">
                            <div className="logo-desc-cover-flex">
                                <div className="logo-desc-cover-item">
                                    <p className="desc-p">Because we know that even the best technology is only as good as the people behind it. That's we offer the best core banking implementation and technology suitable for all your financial operations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content-cover-item">
                            <div className="footer-image-wrapper-flex">
                                <div className="footer-image-wrapper-item">
                                    <div className="footer-image-cover-flex">
                                        <div className="footer-image-cover-item">
                                            <img className="footer-img" src={footerImages[0]} alt="mifos initiative" />
                                        </div>
                                    </div>
                                    <div className="footer-image-text-cover-flex">
                                        <div className="footer-image-text-cover-item">
                                            <p className="footer-image-text">A Mifos Initiative</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content-cover-flex2">
                        <div className="footer-content-cover-item">
                            <div className="footer-copyright-cover-flex">
                                <div className="footer-copyright-cover-item">
                                    <p className="copyright-p">&copy; 2022 Paycore. All right reserved</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content-cover-item">
                            <div className="footer-contact-cover">
                                <div className="social-link-cover-flex">
                                    <div className="social-link-inner-cover-flex">
                                        <div className="social-link-cover-item">
                                            <a className="social-link" href=""><Facebook className="social-link-icon" /></a>
                                        </div>
                                        <div className="social-link-cover-item">
                                            <a className="social-link" href=""><Twitter className="social-link-icon" /></a>
                                        </div>
                                        <div className="social-link-cover-item">
                                            <a className="social-link" href=""><Instagram className="social-link-icon" /></a>
                                        </div>
                                        <div className="social-link-cover-item">
                                            <a className="social-link" href=""><LinkedIn className="social-link-icon" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}