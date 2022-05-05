import React from 'react'
import './css/styles.css'
import './css/bootstrap.css'
import './css/fontawesome-all.css'
import details1Office from './images/details-1-office-worker.svg'
import image4567731 from './images/4567731-ai.png'
import serviceIcon1 from './images/services-icon-1.svg'
import serviceIcon2 from './images/services-icon-2.svg'
import serviceIcon3 from './images/services-icon-3.svg'
import teamMember2 from './images/team-member-2.svg'
import Untitled2 from './images/Untitled-2.png'


const LandingPage = () => {
    return (
        <>
            <div>
                {/*<div className="spinner-wrapper">*/}
                {/*    <div className="spinner">*/}
                {/*        <div className="bounce1"></div>*/}
                {/*        <div className="bounce2"></div>*/}
                {/*        <div className="bounce3"></div>*/}
                {/*  </div>*/}
                {/*</div>*/}


                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">


                    <a className="navbar-brand logo-image" href="index.html"><img src={Untitled2}
                                                                                  alt="alternative"/></a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-awesome fas fa-bars"></span>
                        <span className="navbar-toggler-awesome fas fa-times"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#header">Home <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#services">Why use timino?</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#about">About team</a>
                            </li>


                        </ul>
                        <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x facebook"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x twitter"></i>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
                    </div>
                </nav>


                <header id="header" className="header">
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="text-container">
                                        <h1><span className="turquoise">StartUp Timino</span> Create Timeline Free</h1>
                                        <p className="p-large">Use timino for create beautiful interactive timelines
                                            that
                                            you can share on the web.</p>
                                        <a className="btn-solid-lg page-scroll" href="signup">Get Start</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-container">
                                        <img className="img-fluid" src={image4567731} alt="alternative"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <div className="basic-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="text-container">
                                    <h2>What can i do with Timino?</h2>
                                    <p>Timino has everything an aspiring timeline creator could possibly need. We can
                                        create
                                        online timeline
                                        for celebrating a company anniversary we can also record our family memories
                                        like a
                                        diary.</p>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-container">
                                    <img className="img-fluid" src={details1Office}
                                         alt="alternative"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="services" className="cards-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Why use Timino?</h2>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">

                                <div className="card">
                                    <img className="card-image" src={serviceIcon1} alt="alternative"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Include images and videos</h4>
                                        <p>We can add photos and videos in our timelines</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <img className="card-image" src={serviceIcon2} alt="alternative"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Nothing to download </h4>
                                        <p>Timino works in your browser. Sign up for our free
                                            account and you can start creating a timeline now</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <img className="card-image" src={serviceIcon3} alt="alternative"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Share timelines with anyone</h4>
                                        <p>Each timeline you create has its own unique url
                                            that you can send to friends or colleagues</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div id="about" className="basic-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>About The Team</h2>
                                <p className="p-heading p-large">Our team consists of front-end and back-end developers
                                    who
                                    accompanied us on the Timino project.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">

                                <div className="team-member">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src={teamMember2} alt="alternative"/>
                                    </div>
                                    <p className="p-large"><strong>Mohamadreza Aminroaya</strong></p>
                                    <p className="job-title">Back-end Developer</p>
                                    <span className="social-icons">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x facebook"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x twitter"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                                </span>
                                </div>

                                <div className="team-member">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src={teamMember2} alt="alternative"/>
                                    </div>
                                    <p className="p-large"><strong>Hosein Taheri</strong></p>
                                    <p className="job-title">Back-end Developer</p>
                                    <span className="social-icons">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x facebook"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x twitter"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                                    </span>
                                </div>

                                <div className="team-member">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src={teamMember2} alt="alternative"/>
                                    </div>
                                    <p className="p-large"><strong>Mohamadreza Hasani</strong></p>
                                    <p className="job-title">Front-end Developer</p>
                                    <span className="social-icons">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x facebook"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x twitter"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                                    </span>
                                </div>

                                <div className="team-member">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src={teamMember2} alt="alternative"/>
                                    </div>
                                    <p className="p-large"><strong>Hosein Rahimi</strong></p>
                                    <p className="job-title">Front-end Developer</p>
                                    <span className="social-icons">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x facebook"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x twitter"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                                    </span>
                                </div>


                                <div className="team-member">
                                    <div className="image-wrapper">
                                        <img className="img-fluid" src={teamMember2} alt="alternative"/>
                                    </div>
                                    <p className="p-large"><strong>Soheil Hamzebeigy</strong></p>
                                    <p className="job-title">Front-end Developer</p>
                                    <span className="social-icons">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x facebook"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x twitter"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                                    </span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-col">
                                    <h4>About Evolo</h4>
                                    <p>We're passionate about offering some of the best business growth services for
                                        startups</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-col middle">
                                    <h4>Important Links</h4>
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Our business partners <a className="turquoise"
                                                                                                 href="#your-link">startupguide.com</a>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Read our <a className="turquoise"
                                                                                    href="terms-conditions.html">Terms &
                                                Conditions</a>, <a className="turquoise" href="privacy-policy.html">Privacy
                                                Policy</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-col last">
                                    <h4>Social Media</h4>
                                    <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                                    <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                                    <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-google-plus-g fa-stack-1x"></i>
                            </a>
                        </span>
                                    <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                                    <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <script src="js/jquery.min.js"></script>
                <script src="js/popper.min.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/jquery.easing.min.js"></script>
                <script src="js/swiper.min.js"></script>
                <script src="js/jquery.magnific-popup.js"></script>
                <script src="js/validator.min.js"></script>
                <script src="js/scripts.js"></script>
            </div>
        </>
    );
}

export default LandingPage;
