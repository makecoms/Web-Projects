import { useState, useEffect } from "react";
import heroBackground from "/images/logob.jpg";

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const services = [
        {
            title: "Dealers For Various Reputed Brands Of Pumpsets",
            description: "As an authorized distributor, the company offers a comprehensive selection of pumpsets from multiple, well-regarded manufacturers for diverse applications.",
            image: "/images/Pumpsets.webp"
        },
        {
            title: "Dealers For Reputed Brands Of Solar Pumps",
            description: "As an authorized dealer, the company supplies and services solar pumps from a curated selection of highly-regarded manufacturers for reliable and sustainable water solutions.",
            image: "/images/solar pump.jpg"
        },
        {
            title: "Irrigation Related Tech Projects",
            description: "Smart irrigation control systems that optimize water usage and maximize crop yield with precision technology.",
            image: "/images/service-controller.jpg"
        }
    ];

    // Check if touch device on component mount and resize
    useEffect(() => {
        const checkTouchDevice = () => {
            // Check for touch support or if screen width is tablet/mobile (1024px and below)
            const isTouch = 'ontouchstart' in window || 
                           navigator.maxTouchPoints > 0 || 
                           navigator.msMaxTouchPoints > 0 ||
                           window.innerWidth <= 1024;
            setIsTouchDevice(isTouch);
        };

        checkTouchDevice();
        window.addEventListener('resize', checkTouchDevice);

        return () => window.removeEventListener('resize', checkTouchDevice);
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % services.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [services.length]);

    const scrollToServices = () => {
        const servicesSection = document.getElementById("services");
        servicesSection?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContact = () => {
        const footer = document.getElementById("contact");
        footer?.scrollIntoView({ behavior: "smooth" });
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Click-only handlers for navbar buttons
    const handleNavButtonTouchStart = (e) => {
        if (isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'scale(0.95)';
            button.style.backgroundColor = 'rgba(52, 152, 219, 1)'; // Blue color during click
            button.style.color = 'white';
            button.style.borderColor = 'rgba(52, 152, 219, 1)';
            button.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.4)';
        }
    };

    const handleNavButtonTouchEnd = (e) => {
        if (isTouchDevice) {
            const button = e.currentTarget;
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                button.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // White background
                button.style.color = 'rgba(0, 0, 0, 1)'; // Black text
                button.style.borderColor = 'rgba(74, 72, 72, 1)'; // Gray border
                button.style.boxShadow = '';
            }, 150);
        }
    };

    const handleNavButtonMouseDown = (e) => {
        if (!isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'scale(0.95)';
            button.style.backgroundColor = 'rgba(52, 152, 219, 1)'; // Blue color during click
            button.style.color = 'white';
            button.style.borderColor = 'rgba(52, 152, 219, 1)';
            button.style.boxShadow = '0 2px 8px rgba(52, 152, 219, 0.3)';
        }
    };

    const handleNavButtonMouseUp = (e) => {
        if (!isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'scale(1)';
            button.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // White background
            button.style.color = 'rgba(0, 0, 0, 1)'; // Black text
            button.style.borderColor = 'rgba(74, 72, 72, 1)'; // Gray border
            button.style.boxShadow = '';
        }
    };

    // Remove hover effects - only keep click effects
    const handleNavButtonMouseEnter = (e) => {
        // No hover effect - only scale transform
        if (!isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'translateY(-1px)';
        }
    };

    const handleNavButtonMouseLeave = (e) => {
        if (!isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'translateY(0)';
        }
    };

    // Enhanced handlers for CTA buttons (keep existing)
    const handleCtaButtonTouchStart = (e) => {
        if (isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'translateY(-2px) scale(0.98)';
            button.style.boxShadow = '0 15px 35px rgba(39, 174, 96, 0.8)';
        }
    };

    const handleCtaButtonTouchEnd = (e) => {
        if (isTouchDevice) {
            const button = e.currentTarget;
            setTimeout(() => {
                button.style.transform = 'translateY(0) scale(1)';
                button.style.boxShadow = '0 8px 25px rgba(39, 174, 96, 0.4)';
            }, 150);
        }
    };

    const handleCtaButtonMouseEnter = (e) => {
        if (!isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 15px 35px rgba(39, 174, 96, 0.6)';
        }
    };

    const handleCtaButtonMouseLeave = (e) => {
        if (!isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 8px 25px rgba(39, 174, 96, 0.4)';
        }
    };

    const handleCtaButtonMouseDown = (e) => {
        if (!isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'translateY(-1px) scale(0.98)';
            button.style.boxShadow = '0 5px 15px rgba(39, 174, 96, 0.8)';
        }
    };

    const handleCtaButtonMouseUp = (e) => {
        if (!isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'translateY(-3px) scale(1)';
            button.style.boxShadow = '0 15px 35px rgba(39, 174, 96, 0.6)';
        }
    };

    return (
        <div className="min-vh-100" style={{ backgroundColor: "#dce4ebff" }}>
            {/* Header/Navbar - Different color than buttons */}
            <nav className="fixed-top w-100" style={{ 
                zIndex: 1050, 
                backgroundColor: "#79b92cff", // Dark blue-gray navbar
                minHeight: "50px",
                borderBottom: "2px solid rgba(255, 255, 255, 0.6)" // Blue accent border
            }}>
                <div className="container h-100">
                    <div className="d-flex justify-content-between align-items-center h-100 py-1">
                        {/* Buttons - White with black text, blue click effect */}
                        <div className="d-flex gap-1 gap-md-2">
                            <button
                                className="btn btn-outline-light border-2 text-decoration-none px-2 py-1"
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                onTouchStart={handleNavButtonTouchStart}
                                onTouchEnd={handleNavButtonTouchEnd}
                                onMouseDown={handleNavButtonMouseDown}
                                onMouseUp={handleNavButtonMouseUp}
                                onMouseEnter={handleNavButtonMouseEnter}
                                onMouseLeave={handleNavButtonMouseLeave}
                                style={{
                                    color: "rgba(0, 0, 0, 1)",
                                    fontSize: '0.8rem',
                                    borderColor: "rgba(74, 72, 72, 1)",
                                    fontWeight: '500',
                                    transition: 'all 0.15s ease',
                                    borderRadius: '8px',
                                    minHeight: '32px',
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(241, 238, 238, 1)' // White buttons
                                }}
                            >
                                Home
                            </button>
                            <button
                                className="btn btn-outline-light border-2 text-decoration-none px-2 py-1"
                                onClick={scrollToServices}
                                onTouchStart={handleNavButtonTouchStart}
                                onTouchEnd={handleNavButtonTouchEnd}
                                onMouseDown={handleNavButtonMouseDown}
                                onMouseUp={handleNavButtonMouseUp}
                                onMouseEnter={handleNavButtonMouseEnter}
                                onMouseLeave={handleNavButtonMouseLeave}
                                style={{
                                    color: "rgba(0, 0, 0, 1)",
                                    fontSize: '0.8rem',
                                    borderColor: "rgba(74, 72, 72, 1)",
                                    fontWeight: '500',
                                    transition: 'all 0.15s ease',
                                    borderRadius: '8px',
                                    minHeight: '32px',
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(255, 255, 255, 1)' // White buttons
                                }}
                            >
                                Services
                            </button>
                            {/* Contact button - hidden on mobile, visible on tablet and desktop */}
                            <button
                                className="btn btn-outline-light border-2 text-decoration-none px-2 py-1 d-none d-md-block"
                                onClick={scrollToContact}
                                onTouchStart={handleNavButtonTouchStart}
                                onTouchEnd={handleNavButtonTouchEnd}
                                onMouseDown={handleNavButtonMouseDown}
                                onMouseUp={handleNavButtonMouseUp}
                                onMouseEnter={handleNavButtonMouseEnter}
                                onMouseLeave={handleNavButtonMouseLeave}
                                style={{
                                    color: "rgba(0, 0, 0, 1)",
                                    fontSize: '0.8rem',
                                    borderColor: "rgba(74, 72, 72, 1)",
                                    fontWeight: '500',
                                    transition: 'all 0.15s ease',
                                    borderRadius: '8px',
                                    minHeight: '32px',
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(255, 255, 255, 1)' // White buttons
                                }}
                            >
                                Contact
                            </button>
                        </div>

                        {/* SA Logo - aligned to right - MAXIMIZED SIZE */}
                        <div className="logo-container-5" style={{ marginRight: '15px' }}>
                            <span className="logo-s-5">S</span>
                            <span className="logo-a-5">A</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="position-relative d-flex align-items-center justify-content-center overflow-hidden hero-section"
                style={{
                    backgroundImage: `linear-gradient(rgba(25, 58, 35, 0.7), rgba(244, 184, 115, 0.5)), url(${heroBackground})`,
                }}
            >
                <div className="position-relative text-center text-white w-100 h-100 d-flex flex-column justify-content-center" style={{ zIndex: 10 }}>
                    {/* Main Hero Content */}
                    <div className="hero-main-content">
                        {/* Top Section - "Shrinidhii Automations" */}
                        <div className="hero-top-content mb-4 mb-md-5">
                            <div className="container px-4">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10">
                                        <h1 className="hero-title">
                                            Shrinidhii <br /> Automations
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section - Subtitle and Button */}
                        <div className="hero-bottom-content">
                            <div className="container px-4">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10">
                                        <p className="hero-subtitle">
                                            Advanced Electrical Solutions for Modern Irrigation Systems
                                        </p>

                                        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                                            <button
                                                className="btn btn-lg px-5 py-3 rounded-pill fw-bold"
                                                onClick={scrollToContact}
                                                onTouchStart={handleCtaButtonTouchStart}
                                                onTouchEnd={handleCtaButtonTouchEnd}
                                                onMouseDown={handleCtaButtonMouseDown}
                                                onMouseUp={handleCtaButtonMouseUp}
                                                onMouseEnter={handleCtaButtonMouseEnter}
                                                onMouseLeave={handleCtaButtonMouseLeave}
                                                style={{
                                                    fontSize: '1.1rem',
                                                    background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
                                                    border: 'none',
                                                    boxShadow: '0 8px 25px rgba(39, 174, 96, 0.4)',
                                                    color: 'white',
                                                    transition: 'all 0.2s ease',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                Contact Us
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Hidden on Mobile */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x scroll-indicator-wrapper d-none d-md-block">
                    <div className="scroll-indicator">
                        <div className="scroll-arrow"></div>
                    </div>
                </div>
            </section>

            {/* Services Section - Auto Sliding Carousel */}
            <section id="services" className="py-5 bg-light">
                <div className="container h-100">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10">
                            <h2 className="text-center mb-5 fw-bold text-primary" style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}>
                                Highlights
                            </h2>

                            {/* Auto Sliding Carousel */}
                            <div className="carousel-container position-relative">
                                <div
                                    className="carousel-slides d-flex transition-all"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {services.map((service, index) => (
                                        <div key={index} className="carousel-slide flex-shrink-0 w-100">
                                            <div className="card border-0 shadow-sm h-100">
                                                <div className="row g-0 h-100">
                                                    <div className="col-md-6">
                                                        <img
                                                            src={service.image}
                                                            alt={service.title}
                                                            className="img-fluid w-100 h-100"
                                                            style={{ objectFit: 'cover', minHeight: '400px' }}
                                                        />
                                                    </div>
                                                    <div className="col-md-6 d-flex align-items-center">
                                                        <div className="p-4 p-lg-5">
                                                            <h3 className="h2 fw-bold text-dark mb-4">{service.title}</h3>
                                                            <p className="text-muted mb-4 fs-5">{service.description}</p>
                                                            <button
                                                                className="btn btn-primary btn-lg px-4"
                                                                onClick={scrollToContact}
                                                                onTouchStart={(e) => {
                                                                    if (isTouchDevice) {
                                                                        e.target.style.transform = 'translateY(-2px) scale(0.98)';
                                                                    }
                                                                }}
                                                                onTouchEnd={(e) => {
                                                                    if (isTouchDevice) {
                                                                        e.target.style.transform = 'translateY(0) scale(1)';
                                                                    }
                                                                }}
                                                                onMouseDown={(e) => {
                                                                    if (!isTouchDevice) {
                                                                        e.target.style.transform = 'translateY(-1px) scale(0.98)';
                                                                    }
                                                                }}
                                                                onMouseUp={(e) => {
                                                                    if (!isTouchDevice) {
                                                                        e.target.style.transform = 'translateY(-2px) scale(1)';
                                                                    }
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    if (!isTouchDevice) {
                                                                        e.target.style.transform = 'translateY(-2px)';
                                                                    }
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    if (!isTouchDevice) {
                                                                        e.target.style.transform = 'translateY(0)';
                                                                    }
                                                                }}
                                                                style={{
                                                                    transition: 'all 0.2s ease',
                                                                    cursor: 'pointer'
                                                                }}
                                                            >
                                                                Learn More
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                <button
                                    className="carousel-arrow carousel-arrow-prev position-absolute top-50 start-0 translate-middle-y"
                                    onClick={prevSlide}
                                    onTouchStart={(e) => {
                                        if (isTouchDevice) {
                                            e.target.style.transform = 'translateY(-50%) scale(0.9)';
                                            e.target.style.backgroundColor = 'rgba(26, 82, 118, 1)';
                                        }
                                    }}
                                    onTouchEnd={(e) => {
                                        if (isTouchDevice) {
                                            e.target.style.transform = 'translateY(-50%) scale(1)';
                                            e.target.style.backgroundColor = 'rgba(26, 82, 118, 0.8)';
                                        }
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isTouchDevice) {
                                            e.target.style.transform = 'translateY(-50%) scale(1.1)';
                                            e.target.style.backgroundColor = '#1a5276';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isTouchDevice) {
                                            e.target.style.transform = 'translateY(-50%) scale(1)';
                                            e.target.style.backgroundColor = 'rgba(26, 82, 118, 0.8)';
                                        }
                                    }}
                                >
                                    ‹
                                </button>
                                <button
                                    className="carousel-arrow carousel-arrow-next position-absolute top-50 end-0 translate-middle-y"
                                    onClick={nextSlide}
                                    onTouchStart={(e) => {
                                        if (isTouchDevice) {
                                            e.target.style.transform = 'translateY(-50%) scale(0.9)';
                                            e.target.style.backgroundColor = 'rgba(26, 82, 118, 1)';
                                        }
                                    }}
                                    onTouchEnd={(e) => {
                                        if (isTouchDevice) {
                                            e.target.style.transform = 'translateY(-50%) scale(1)';
                                            e.target.style.backgroundColor = 'rgba(26, 82, 118, 0.8)';
                                        }
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isTouchDevice) {
                                            e.target.style.transform = 'translateY(-50%) scale(1.1)';
                                            e.target.style.backgroundColor = '#1a5276';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isTouchDevice) {
                                            e.target.style.transform = 'translateY(-50%) scale(1)';
                                            e.target.style.backgroundColor = 'rgba(26, 82, 118, 0.8)';
                                        }
                                    }}
                                >
                                    ›
                                </button>

                                {/* Indicators */}
                                <div className="carousel-indicators position-absolute start-50 translate-middle-x">
                                    {services.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                                            onClick={() => goToSlide(index)}
                                            onTouchStart={(e) => {
                                                if (isTouchDevice) {
                                                    e.target.style.transform = 'scale(1.3)';
                                                }
                                            }}
                                            onTouchEnd={(e) => {
                                                if (isTouchDevice) {
                                                    e.target.style.transform = 'scale(1.2)';
                                                }
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-dark text-white">
                <div className="container px-3 px-md-4 py-4 py-md-5">
                    <div className="row g-3 g-md-4 mb-4">
                        <div className="col-12 col-md-4">
                            <h3 className="h5 fw-bold mb-2 mb-md-3">Shrinidhii Automations</h3>
                            <p className="opacity-90 small" style={{ lineHeight: '1.4' }}>
                                Your trusted partner in agricultural electrical solutions.
                                Providing quality water pumps, motors, and irrigation systems for modern farming.
                            </p>
                        </div>

                        <div className="col-12 col-md-4">
                            <h4 className="h6 fw-semibold mb-2 mb-md-3">Contact Us</h4>
                            <div className="d-flex flex-column gap-2 gap-md-3">
                                <div className="d-flex align-items-start gap-2">
                                    <span className="mt-1 small">📍</span>
                                    <a 
                                        href="https://maps.app.goo.gl/152Eq3eizUyfK68s9?g_st=ipc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-decoration-none opacity-90 small"
                                        style={{ transition: 'opacity 0.2s ease' }}
                                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                                        onMouseLeave={(e) => e.target.style.opacity = '0.9'}
                                    >
                                        Harshitha Complex Urlandi <br /> Bypass Road, Puttur 574201
                                    </a>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <span className="small">📞</span>
                                    <a
                                        href="tel:+918904815080"
                                        className="text-white text-decoration-none opacity-90 small"
                                        style={{ transition: 'opacity 0.2s ease' }}
                                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                                        onMouseLeave={(e) => e.target.style.opacity = '0.9'}
                                    >
                                        +91 8904815080
                                    </a>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <span className="small">✉️</span>
                                    <a
                                        href="mailto:shrinidhiiautomations@gmail.com"
                                        className="text-white text-decoration-none opacity-90 small"
                                        style={{ transition: 'opacity 0.2s ease' }}
                                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                                        onMouseLeave={(e) => e.target.style.opacity = '0.9'}
                                    >
                                        shrinidhiiautomations@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-top border-secondary pt-3 pt-md-4 text-center">
                        <p className="opacity-80 mb-0 small">
                             Shrinidhii Automations | Expertise in Irrigation Automation
                        </p>
                    </div>
                </div>
            </footer>

            {/* Custom CSS */}
            <style jsx>{`
    .hero-section {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        height: 100vh;
        min-height: 600px;
        position: relative;
        margin-top: 50px; /* Reduced to match new navbar height */
    }

    /* Main hero content container */
    .hero-main-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    /* Hero content sections - using flexbox instead of absolute positioning */
    .hero-top-content {
        text-align: center;
    }

    .hero-bottom-content {
        text-align: center;
    }

    /* Hero Title Styles */
    .hero-title {
        font-size: clamp(2.5rem, 10vw, 5rem);
        font-weight: 800;
        line-height: 1.1;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
        margin-bottom: 0;
    }

    /* Hero Subtitle Styles */
    .hero-subtitle {
        font-size: clamp(1.2rem, 4vw, 1.8rem);
        font-weight: 300;
        opacity: 0.95;
        margin-bottom: 1.5rem;
        line-height: 1.4;
    }

    /* DESKTOP VIEWS - Complete visibility of background image */
    @media (min-width: 1024px) {
        .hero-section {
            background-size: contain;
            background-position: center center;
            background-color: #d1d1d1
        }
    }

    /* Large Desktop - Ensure full visibility */
    @media (min-width: 1200px) {
        .hero-section {
            background-size: contain;
            background-position: center top;
        }
    }

    /* Extra large screens */
    @media (min-width: 1440px) {
        .hero-section {
            background-size: contain;
            background-position: center top;
        }
    }

    /* Tablet Media Query - Keep existing behavior */
    @media (max-width: 1024px) and (min-width: 769px) {
        .hero-section {
            background-position: center 25%;
            background-size: cover;
            height: 90vh;
            min-height: 500px;
            margin-top: 50px; /* Reduced to match new navbar height */
        }

        .hero-title {
            font-size: clamp(2.2rem, 8vw, 4rem);
        }

        .hero-subtitle {
            font-size: clamp(1.1rem, 3.5vw, 1.6rem);
        }

        .hero-top-content {
            margin-bottom: 2.5rem;
        }
    }

    /* Mobile Media Query - Keep existing behavior */
    @media (max-width: 768px) {
        .hero-section {
            background-position: center 20%;
            background-attachment: scroll;
            background-size: cover;
            height: 80vh;
            min-height: 400px;
            margin-top: 50px; /* Reduced to match new navbar height */
        }

        .hero-title {
            font-size: clamp(2rem, 9vw, 3.5rem);
            line-height: 1.2;
            text-shadow: 1px 1px 6px rgba(0,0,0,0.4);
        }

        .hero-subtitle {
            font-size: clamp(1rem, 3.5vw, 1.4rem);
            line-height: 1.3;
            margin-bottom: 1rem;
        }

        .hero-top-content {
            margin-bottom: 2rem;
        }

        .hero-main-content {
            padding: 0 10px;
        }

        /* Mobile navbar adjustments - buttons aligned left, logo right */
        nav .container .d-flex {
            flex-direction: row;
            justify-content: space-between;
        }

        nav .d-flex.gap-1 {
            gap: 0.4rem !important;
        }

        /* Ensure buttons are clickable on mobile */
        .btn {
            min-height: 32px; /* Reduced from 44px */
            padding: 8px 12px !important; /* Reduced padding */
        }
    }

    /* Small Mobile Media Query */
    @media (max-width: 480px) {
        .hero-section {
            background-size: cover;
            height: 75vh;
            min-height: 350px;
            margin-top: 50px; /* Reduced to match new navbar height */
        }

        .hero-title {
            font-size: clamp(1.8rem, 8vw, 2.8rem);
            line-height: 1.3;
        }

        .hero-subtitle {
            font-size: clamp(0.9rem, 3vw, 1.2rem);
            line-height: 1.4;
            margin-bottom: 0.8rem;
        }

        .hero-top-content {
            margin-bottom: 1.5rem;
        }

        /* Mobile navbar buttons - further reduced */
        nav .btn {
            margin-top: 4px;
            margin-bottom: 4px;
            padding: 2px 9px !important; /* Further reduced */
            font-size: 0.7rem !important; /* Smaller font */
            min-height: 20px; /* Smaller height */
        }
    }

    /* Extra Small Mobile */
    @media (max-width: 360px) {
        /* Small adjustments for extra small screens */
        nav .btn {
            padding: 5px 8px !important;
            font-size: 0.7rem !important;
            min-height: 28px;
        }
    }

    .scroll-indicator-wrapper {
        bottom: 2rem;
    }

    @media (max-width: 768px) {
        .scroll-indicator-wrapper {
            bottom: 1rem;
        }
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    .scroll-indicator {
        width: 30px;
        height: 50px;
        border: 2px solid rgba(255, 255, 255, 0.6);
        border-radius: 25px;
        position: relative;
    }

    .scroll-arrow {
        width: 4px;
        height: 10px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 2px;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        animation: float 2s ease-in-out infinite;
    }

    /* Carousel Styles */
    .carousel-container {
        max-width: 1000px;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        position: relative;
    }

    .carousel-slides {
        transition: transform 0.5s ease-in-out;
    }

    .transition-all {
        transition: all 0.5s ease-in-out;
    }

    .carousel-slide {
        display: flex;
    }

    .carousel-arrow {
        background: rgba(26, 82, 118, 0.8);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        z-index: 10;
    }

    .carousel-arrow:hover {
        background: #1a5276;
        transform: scale(1.1);
    }

    .carousel-arrow-prev {
        left: 20px;
    }

    .carousel-arrow-next {
        right: 20px;
    }

    .carousel-indicators {
        bottom: 20px;
        display: flex;
        gap: 10px;
        z-index: 10;
    }

    .carousel-indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .carousel-indicator.active {
        background: #27ae60;
        transform: scale(1.2);
    }

    .carousel-indicator:hover {
        background: #27ae60;
    }

    /* Mobile Responsiveness for Carousel */
    @media (max-width: 768px) {
        .carousel-arrow {
            width: 44px; /* Larger for touch */
            height: 44px;
            font-size: 1.2rem;
        }

        .carousel-arrow-prev {
            left: 10px;
        }

        .carousel-arrow-next {
            right: 10px;
        }

        .carousel-slide .card .row {
            flex-direction: column;
        }

        .carousel-slide img {
            min-height: 250px !important;
        }

        .carousel-indicators {
            bottom: 10px;
        }

        .carousel-indicator {
            width: 14px; /* Larger for touch */
            height: 14px;
        }
    }

    /* Ensure proper section spacing */
    #services {
        scroll-margin-top: 60px;
    }

    #contact {
        scroll-margin-top: 60px;
    }

    /* Navbar height adjustments for all views */
    nav {
        min-height: 50px;
    }

    /* Ensure buttons are properly clickable on all devices */
    .btn {
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    /* Improve touch targets for mobile and tablet */
    @media (max-width: 1024px) {
        .btn {
            min-height: 32px; /* Reduced from 44px */
            min-width: 32px; /* Reduced from 44px */
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    /* NEW NEON GLOW LOGO STYLES - MAXIMIZED SIZE */
    .logo-container-5 {
    font-weight: 700;
    display: flex;
    line-height: 1;
    letter-spacing: -1px;
    position: relative;
    font-family: 'Consolas', 'Courier New', monospace;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-right: 15px;
    align-items: center; /* Add this for perfect vertical centering */
    justify-content: center; /* Add this for horizontal centering within container */
}

    /* Base styles for all letters in this design */
    .logo-container-5 span {
        /* Core color for the letters */
        color: #ffffff; 
        
        /* Text stroke for a thin, defined edge */
        -webkit-text-stroke: 0.5px #00aaff; 
        
        /* The main glow effect */
        text-shadow: 
            0 0 5px rgba(0, 170, 255, 0.8), /* Light blue inner glow */
            0 0 10px rgba(0, 170, 255, 0.6), /* Wider blue glow */
            0 0 15px rgba(255, 255, 255, 0.4); /* White/light center */

        /* Slight static transform */
        transform: skewX(-4deg);
        filter: drop-shadow(0 0 3px rgba(0, 170, 255, 0.5)); /* Extra blur for a true glow */
    }

    /* --- Styles for the 'S' letter (Design 5) --- */
    .logo-s-5 {
        margin-right: -2px;
        z-index: 2; 
    }

    /* --- Styles for the 'A' letter (Design 5) --- */
    .logo-a-5 {
        z-index: 1;
    }

    /* --- Segmented Color Overlay for the 'A' letter --- */
    .logo-a-5::before {
        content: 'A';
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        /* The 'A' upper segment color is grey/silver */
        color: rgba(251, 251, 251, 0.6); 
        
        /* Cut off the grey color at 45% */
        background: linear-gradient(
            to bottom,
            #aaaaaa 0%, 
            #aaaaaa 45%,
            transparent 45%,
            transparent 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        
        /* Match static effects */
        transform: skewX(-4deg);
        z-index: 3; /* Over the original 'A' */
        
        /* Soft grey glow/shadow for the upper part */
        text-shadow: 
            0 0 3px rgba(170, 170, 170, 0.5),
            0 0 6px rgba(170, 170, 170, 0.3);
        filter: drop-shadow(0 0 2px rgba(170, 170, 170, 0.3));
    }

    /* MAXIMIZED Desktop logo size - Fills navbar height */
    .logo-container-5 {
        font-size: 45px; /* Increased from 28px to 38px */
    }

    /* MAXIMIZED Tablet logo size */
    @media (max-width: 1024px) and (min-width: 769px) {
        .logo-container-5 {
            font-size: 45px; /* Increased from 26px to 36px */
        }
    }

    /* MAXIMIZED Mobile logo size */
    @media (max-width: 768px) {
        .logo-container-5 {
            font-size: 50px; /* Increased from 24px to 34px */
            padding-bottom: 0;
            padding-top: 0;
        }
        
        .logo-container-5 span {
            -webkit-text-stroke: 0.4px #00aaff;
            text-shadow: 
                0 0 4px rgba(0, 170, 255, 0.8),
                0 0 8px rgba(0, 170, 255, 0.6),
                0 0 12px rgba(255, 255, 255, 0.4);
        }
    }

    /* MAXIMIZED Small Mobile logo size */
    @media (max-width: 480px) {
        .logo-container-5 {
            font-size: 32px; /* Increased from 22px to 32px */
            margin-right: 10px;
        }
    }

    /* MAXIMIZED Extra Small Mobile logo size */
    @media (max-width: 360px) {
        .logo-container-5 {
            font-size: 40px; /* Increased from 20px to 30px */
            margin-right: 8px;
        }
    }

    /* Hover effects for the logo - Only on desktop (not tablet or mobile) */
    @media (min-width: 1025px) {
        .logo-container-5:hover {
            transform: scale(1.05);
        }

        .logo-container-5:hover span {
            text-shadow: 
                0 0 8px rgba(0, 170, 255, 0.9),
                0 0 15px rgba(0, 170, 255, 0.7),
                0 0 20px rgba(255, 255, 255, 0.6);
            filter: drop-shadow(0 0 5px rgba(0, 170, 255, 0.7));
        }
    }
            `}</style>
        </div>
    );
};

export default HomePage;
