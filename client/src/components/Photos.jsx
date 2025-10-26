import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const PhotosPage = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Sample photos data - each image in its own category
    const photos = [
        {
            id: 1,
            src: "/images/Visitingcard.webp",
            alt: "Business Visiting Card",
            category: "Business Card 1"
        },
        {
            id: 2,
            src: "/images/visitingcard1.webp",
            alt: "Company Visiting Card",
            category: "Business Card 2"
        },
        {
            id: 3,
            src: "/images/WhatsApp Image 2025-10-23 at 23.43.14_2005f915.webp",
            alt: "Agricultural Pump Sets",
            category: "Field Work"
        },
        // Additional Field Work Photos
        {
            id: 4,
            src: "/images/WhatsApp Image 2025-10-23 at 23.45.03_abc56cb1.webp",
            alt: "Farm Irrigation System Installation",
            category: "Field Work"
        },
        {
            id: 5,
            src: "/images/WhatsApp Image 2025-10-23 at 23.45.03_abc56cb1.webp",
            alt: "Agricultural Pump Installation",
            category: "Field Work"
        },
        {
            id: 6,
            src: "/images/WhatsApp Image 2025-10-23 at 23.45.49_e967c065.webp",
            alt: "Crop Field Automation",
            category: "Field Work"
        },
        {
            id: 7,
            src: "/images/WhatsApp Image 2025-10-23 at 23.46.10_d9d84c76.webp",
            alt: "Water Pump Setup",
            category: "Field Work"
        },
        {
            id: 8,
            src: "/images/WhatsApp Image 2025-10-23 at 23.46.27_549a383e.webp",
            alt: "Irrigation Control Panel",
            category: "Field Work"
        },
        {
            id: 9,
            src: "/images/WhatsApp Image 2025-10-23 at 23.46.57_92456441.webp",
            alt: "Farm Automation Solution",
            category: "Field Work"
        },
        {
            id: 10,
            src: "/images/WhatsApp Image 2025-10-23 at 23.46.57_92456441.webp",
            alt: "Agricultural Motor Installation",
            category: "Field Work"
        },
        {
            id: 11,
            src: "/images/WhatsApp Image 2025-10-23 at 23.47.55_037aef52.webp",
            alt: "Field Irrigation Project",
            category: "Field Work"
        },
        {
            id: 12,
            src: "/images/WhatsApp Image 2025-10-23 at 23.48.37_3eb28a39.webp",
            alt: "Pump House Setup",
            category: "Field Work"
        },
        {
            id: 13,
            src: "/images/WhatsApp Image 2025-10-23 at 23.50.20_adef1ab2.webp",
            alt: "Agricultural Electrical Work",
            category: "Field Work"
        },
        {
            id: 14,
            src: "/images/WhatsApp Image 2025-10-23 at 23.51.42_dfe0180d.webp",
            alt: "Farm Water Management",
            category: "Field Work"
        },
        {
            id: 15,
            src: "/images/WhatsApp Image 2025-10-23 at 23.52.33_cc8b000e.webp",
            alt: "Irrigation System Maintenance",
            category: "Field Work"
        },
        {
            id: 16,
            src: "/images/WhatsApp Image 2025-10-23 at 23.53.07_381915da.webp",
            alt: "Agricultural Automation Project",
            category: "Field Work"
        },
        {
            id: 17,
            src: "/images/WhatsApp Image 2025-10-23 at 23.53.36_20f8c361.webp",
            alt: "Agricultural Automation Project",
            category: "Field Work"
        }
    ];

    // Create categories from the photos data + "All" category
    const categories = ["All", ...new Set(photos.map(photo => photo.category))];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    // Check if touch device on component mount and resize
    useEffect(() => {
        const checkTouchDevice = () => {
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

    const scrollToHome = () => {
        window.location.href = '/';
    };

    const scrollToContact = () => {
        const footer = document.getElementById("contact");
        footer?.scrollIntoView({ behavior: "smooth" });
    };

    const filteredPhotos = selectedCategory === "All"
        ? photos
        : photos.filter(photo => photo.category === selectedCategory);

    // Click-only handlers for navbar buttons
    const handleNavButtonTouchStart = (e) => {
        if (isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'scale(0.95)';
            button.style.backgroundColor = 'rgba(52, 152, 219, 1)';
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
                button.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                button.style.color = 'rgba(0, 0, 0, 1)';
                button.style.borderColor = 'rgba(74, 72, 72, 1)';
                button.style.boxShadow = '';
            }, 150);
        }
    };

    const handleNavButtonMouseDown = (e) => {
        if (!isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'scale(0.95)';
            button.style.backgroundColor = 'rgba(52, 152, 219, 1)';
            button.style.color = 'white';
            button.style.borderColor = 'rgba(52, 152, 219, 1)';
            button.style.boxShadow = '0 2px 8px rgba(52, 152, 219, 0.3)';
        }
    };

    const handleNavButtonMouseUp = (e) => {
        if (!isTouchDevice) {
            const button = e.currentTarget;
            button.style.transform = 'scale(1)';
            button.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            button.style.color = 'rgba(0, 0, 0, 1)';
            button.style.borderColor = 'rgba(74, 72, 72, 1)';
            button.style.boxShadow = '';
        }
    };

    const handleNavButtonMouseEnter = (e) => {
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

    const handleCategoryButtonClick = (category) => {
        setSelectedCategory(category);
    };

    const openModal = (photo) => {
        setSelectedImage(photo);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        if (!selectedImage) return;

        const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedImage.id);
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % filteredPhotos.length;
        } else {
            newIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        }

        setSelectedImage(filteredPhotos[newIndex]);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImage) {
                if (e.key === 'Escape') closeModal();
                if (e.key === 'ArrowRight') navigateImage('next');
                if (e.key === 'ArrowLeft') navigateImage('prev');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <div className="min-vh-100" style={{ backgroundColor: "#dce4ebff" }}>
            {/* Header/Navbar - Updated with only Home and Contact buttons */}
            <nav className="fixed-top w-100" style={{
                zIndex: 1050,
                backgroundColor: "rgba(156, 172, 136, 1)",
                minHeight: "60px",
                borderBottom: "2px solid rgba(255, 255, 255, 0.6)"
            }}>
                <div className="container h-100">
                    <div className="d-flex justify-content-between align-items-center h-100 py-1">
                        {/* Buttons - Only Home and Contact */}
                        <div className="d-flex gap-2 gap-md-3">
                            <Link
                                to="/"
                                className="btn btn-outline-light border-2 text-decoration-none nav-button"
                                onTouchStart={handleNavButtonTouchStart}
                                onTouchEnd={handleNavButtonTouchEnd}
                                onMouseDown={handleNavButtonMouseDown}
                                onMouseUp={handleNavButtonMouseUp}
                                onMouseEnter={handleNavButtonMouseEnter}
                                onMouseLeave={handleNavButtonMouseLeave}
                                style={{
                                    marginTop: '5px',
                                    color: "rgba(0, 0, 0, 1)",
                                    borderColor: "rgba(255, 255, 255, 1)",
                                    fontWeight: '600',
                                    transition: 'all 0.15s ease',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(241, 238, 238, 1)',
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    textDecoration: 'none'
                                }}
                            >
                                Home
                            </Link>
                            {/* Contact button - visible on all devices now */}
                            <button
                                className="btn btn-outline-light border-2 text-decoration-none nav-button"
                                onClick={scrollToContact}
                                onTouchStart={handleNavButtonTouchStart}
                                onTouchEnd={handleNavButtonTouchEnd}
                                onMouseDown={handleNavButtonMouseDown}
                                onMouseUp={handleNavButtonMouseUp}
                                onMouseEnter={handleNavButtonMouseEnter}
                                onMouseLeave={handleNavButtonMouseLeave}
                                style={{
                                    marginTop: '5px',
                                    color: "rgba(0, 0, 0, 1)",
                                    borderColor: "rgba(255, 255, 255, 1)",
                                    fontWeight: '600',
                                    transition: 'all 0.15s ease',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(241, 238, 238, 1)'
                                }}
                            >
                                Contact
                            </button>
                        </div>

                        {/* Pump House Text - Replaced SA Logo */}
                        <div className="pump-house-text" style={{ marginRight: '15px' }}>
                            Pump House
                        </div>
                    </div>
                </div>
            </nav>

            {/* Photos Gallery Section */}
            <section className="py-5" style={{ marginTop: '60px', minHeight: '80vh' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h1 className="text-center mb-4 fw-bold text-primary" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
                                Our Gallery
                            </h1>
                            <p className="text-center mb-5 text-muted fs-5">
                                Explore our work in agricultural automation and irrigation solutions
                            </p>

                            {/* Category Filter */}
                            <div className="row justify-content-center mb-5">
                                <div className="col-12">
                                    <div className="d-flex flex-wrap justify-content-center gap-2">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'} px-3 py-2`}
                                                onClick={() => handleCategoryButtonClick(category)}
                                                style={{
                                                    transition: 'all 0.3s ease',
                                                    borderRadius: '20px',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Photos Grid */}
                            <div className="row g-4">
                                {filteredPhotos.map((photo) => (
                                    <div key={photo.id} className="col-12 col-sm-6 col-lg-4">
                                        <div
                                            className="card h-100 border-0 shadow-sm photo-card"
                                            style={{
                                                cursor: 'pointer',
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                overflow: 'hidden'
                                            }}
                                            onClick={() => openModal(photo)}
                                            onMouseEnter={(e) => {
                                                if (!isTouchDevice) {
                                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isTouchDevice) {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                                }
                                            }}
                                        >
                                            <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                                                <img
                                                    src={photo.src}
                                                    alt={photo.alt}
                                                    className="img-fluid w-100 h-100"
                                                    style={{
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.3s ease'
                                                    }}
                                                    onLoad={(e) => {
                                                        e.target.style.transform = 'scale(1)';
                                                    }}
                                                />
                                                <div className="position-absolute top-0 start-0 m-3">
                                                    <span className="badge bg-primary bg-opacity-90 text-white">
                                                        {photo.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-dark">{photo.alt}</h5>
                                                <p className="card-text text-muted small">
                                                    {selectedCategory === "All"
                                                        ? `Click to view this ${photo.category.toLowerCase()} image.`
                                                        : "Click to view larger image and details."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* No Photos Message */}
                            {filteredPhotos.length === 0 && (
                                <div className="text-center py-5">
                                    <h4 className="text-muted">No photos found in this category</h4>
                                    <p className="text-muted">Please select a different category</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="modal fade show d-block"
                    style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1060 }}
                    onClick={closeModal}
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content border-0 bg-transparent">
                            <div className="modal-header border-0 pb-0">
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    onClick={closeModal}
                                    style={{ fontSize: '1.5rem' }}
                                ></button>
                            </div>
                            <div className="modal-body text-center">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="img-fluid rounded"
                                    style={{ maxHeight: '70vh', objectFit: 'contain' }}
                                />
                                <div className="mt-3 text-white">
                                    <h4 className="fw-bold">{selectedImage.alt}</h4>
                                    <p className="mb-0">Category: {selectedImage.category}</p>
                                </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center">
                                <button
                                    className="btn btn-outline-light mx-2"
                                    onClick={() => navigateImage('prev')}
                                >
                                    ‹ Previous
                                </button>
                                <button
                                    className="btn btn-outline-light mx-2"
                                    onClick={() => navigateImage('next')}
                                >
                                    Next ›
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer - Same as HomePage */}
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
                /* Tablet and Desktop Navbar Button Styles */
                @media (min-width: 769px) {
                    .nav-button {
                        font-size: 1rem !important;
                        padding: 10px 20px !important;
                        min-height: 40px !important;
                        font-weight: 600 !important;
                    }
                    
                    nav {
                        min-height: 60px !important;
                    }

                    /* Adjust gap for desktop with only 2 buttons */
                    nav .d-flex.gap-2 {
                        gap: 1.5rem !important;
                    }
                }

                /* Mobile Media Query */
                @media (max-width: 768px) {
                    .nav-button {
                        font-size: 0.8rem !important;
                        padding: 8px 12px !important;
                        min-height: 32px !important;
                        font-weight: 600 !important;
                    }
                    
                    nav {
                        min-height: 50px !important;
                    }

                    /* Adjust gap for mobile with only 2 buttons */
                    nav .d-flex.gap-2 {
                        gap: 0.8rem !important;
                    }
                }

                /* Small Mobile Media Query */
                @media (max-width: 480px) {
                    .nav-button {
                        padding: 6px 10px !important;
                        font-size: 0.75rem !important;
                        min-height: 30px !important;
                    }

                    nav .d-flex.gap-2 {
                        gap: 0.5rem !important;
                    }
                }

                /* Extra Small Mobile */
                @media (max-width: 360px) {
                    .nav-button {
                        padding: 5px 8px !important;
                        font-size: 0.7rem !important;
                        min-height: 28px !important;
                    }

                    nav .d-flex.gap-2 {
                        gap: 0.3rem !important;
                    }
                }

                /* Photo Card Hover Effects */
                .photo-card:hover img {
                    transform: scale(1.05);
                }

                /* PUMP HOUSE TEXT STYLES - Replaced SA Logo */
                .pump-house-text {
                    font-weight: 700;
                    color: #ffffff;
                    text-shadow: 
                        0 0 5px rgba(0, 170, 255, 0.8),
                        0 0 10px rgba(0, 170, 255, 0.6),
                        0 0 15px rgba(255, 255, 255, 0.4);
                    letter-spacing: -0.5px;
                    font-family: 'Arial', 'Helvetica', sans-serif;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-right: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-transform: uppercase;
                }

                /* Desktop Pump House text size */
                .pump-house-text {
                    font-size: 24px;
                }

                /* Tablet Pump House text size */
                @media (max-width: 1024px) and (min-width: 769px) {
                    .pump-house-text {
                        font-size: 22px;
                    }
                }

                /* Mobile Pump House text size */
                @media (max-width: 768px) {
                    .pump-house-text {
                        font-size: 18px;
                        padding-bottom: 0;
                        padding-top: 0;
                    }
                }

                /* Small Mobile Pump House text size */
                @media (max-width: 480px) {
                    .pump-house-text {
                        font-size: 16px;
                        margin-right: 10px;
                    }
                }

                /* Extra Small Mobile Pump House text size */
                @media (max-width: 360px) {
                    .pump-house-text {
                        font-size: 14px;
                        margin-right: 8px;
                    }
                }

                /* Hover effects for Pump House text - Only on desktop (not tablet or mobile) */
                @media (min-width: 1025px) {
                    .pump-house-text:hover {
                        transform: scale(1.05);
                        text-shadow: 
                            0 0 8px rgba(0, 170, 255, 0.9),
                            0 0 15px rgba(0, 170, 255, 0.7),
                            0 0 20px rgba(255, 255, 255, 0.6);
                    }
                }

                /* Modal Animation */
                .modal {
                    backdrop-filter: blur(5px);
                }

                .modal-content {
                    animation: modalAppear 0.3s ease-out;
                }

                @keyframes modalAppear {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
};

export default PhotosPage;
