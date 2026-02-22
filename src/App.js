import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  FaBook,
  FaQuestionCircle,
  FaUsers,
  FaPhoneAlt,
  FaBus,
  FaShieldAlt,
  FaMobileAlt,
  FaStar,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaGooglePlay,
  FaApple,
  FaEnvelope,
  FaCheckCircle,
  FaRocket,
  FaLock,
  FaUser,
  FaSun,
  FaPlay,
  FaExclamationTriangle,
  FaGlobe,
  FaCloud,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaAsterisk,
  FaHome,
  FaRegCompass,
  FaRegComments
} from "react-icons/fa";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DeleteAccount from "./components/DeleteAccount";

const ScrollHandler = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return null;
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Features', href: '/#features' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const features = [
    {
      icon: <FaBook />,
      title: "Educational Content",
      description: "Learn about the POCSO act, child rights, and mental health through engaging, interactive lessons."
    },
    {
      icon: <FaQuestionCircle />,
      title: "Interactive Quizzes",
      description: "Test your knowledge and reinforce learning with fun quizzes designed for children."
    },
    {
      icon: <FaUsers />,
      title: "Community Forums",
      description: "Safe spaces for children and parents to discuss, share experiences, and support one another."
    },
    {
      icon: <FaBus />,
      title: "Safe Transit (Coming Soon)",
      description: "Access reliable bus schedules and transit information to ensure safe travel."
    },
    {
      icon: <FaPhoneAlt />,
      title: "Emergency Contacts",
      description: "Quick access to helplines and SOS features for immediate assistance in critical situations."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Monitored",
      description: "A safe, moderated environment ensuring child-friendly interactions and content."
    }
  ];

  const testimonials = [
    {
      name: "Tanu Kaur",
      rating: 5,
      text: "GuardianCare has been amazing for my kids. The interactive quizzes make learning about safety so much fun for them!"
    },
    {
      name: "Jenny DeCosta",
      rating: 5,
      text: "The community forums are a great place to connect with other parents. I feel much more informed and prepared now."
    },
    {
      name: "Ayesha Momin",
      rating: 5,
      text: "Having emergency contacts and educational resources in one place gives me peace of mind."
    }
  ];

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app-wrapper">
        {/* Navbar */}
        <nav className="navbar">
          <div className="container-width">
            <div className="nav-content">
              <div className="nav-logo">
                <Link to="/" className="logo-link">
                  <img src="/guardiancare_logo.svg" alt="GuardianCare Logo" style={{ height: '40px', marginRight: '8px' }} />
                  <span className="logo-text">GuardianCare</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="nav-links-desktop">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>


              {/* Mobile menu button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="mobile-menu">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <ScrollHandler />

        <Routes>
          <Route
            path="/"
            element={
              <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                  <div className="container-width">
                    <div className="hero-grid">
                      {/* Content */}
                      <div className="hero-content">
                        <h1 className="hero-title">
                          Empowering Children Through Education & Safety
                        </h1>
                        <p className="hero-subtitle">
                          GuardianCare is dedicated to educating children and parents about child rights, mental health, and safety protocols in an engaging, secure environment.
                        </p>

                        {/* Feature badges */}
                        <div className="hero-badges">
                          <span className="badge"><FaCheckCircle className="badge-icon" /> Educational</span>
                          <span className="badge"><FaRocket className="badge-icon" /> Interactive Learning</span>
                          <span className="badge"><FaLock className="badge-icon" /> Secure & Private</span>
                          <span className="badge"><FaMobileAlt className="badge-icon" /> Mobile Ready</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hero-cta">
                          <a
                            href="https://play.google.com/store/apps/details?id=app.guardiancare.guardiancare"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary btn-large"
                          >
                            <FaGooglePlay className="btn-icon" />
                            Get on Play Store
                          </a>
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="btn-secondary btn-large"
                            style={{ opacity: 0.7, cursor: 'not-allowed' }}
                          >
                            <FaApple className="btn-icon" />
                            Coming Soon
                          </a>
                        </div>
                      </div>

                      {/* Hero Visual - Phone Mockup */}
                      <div className="hero-visual">
                        <div className="phone-mockup">
                          <div className="phone-frame">
                            <div className="phone-notch"></div>
                            <div className="phone-screen flutter-phone">
                              {/* Animated Header */}
                              <div className="flutter-header">
                                <div className="system-status-bar flutter-status-bar">
                                  <span className="status-time">3:27</span>
                                  <div className="status-icons">
                                    <span className="status-signal">5G</span>
                                    <span className="status-battery">70%</span>
                                  </div>
                                </div>
                                <div className="flutter-header-content">
                                  <div className="flutter-greeting-row">
                                    <FaCloud className="flutter-greeting-icon" />
                                    <span className="flutter-greeting-text">Good Afternoon</span>
                                  </div>
                                  <h2 className="flutter-user-name">Guardian Care Demo</h2>
                                  <div className="flutter-welcome-glass">
                                    <p>Empowering children and families with safety knowledge</p>
                                  </div>
                                </div>
                                {/* Decorative Circles */}
                                <div className="flutter-header-circle fc-1"></div>
                                <div className="flutter-header-circle fc-2"></div>
                              </div>

                              {/* Home Carousel */}
                              <div className="flutter-carousel-section">
                                <div className="flutter-carousel-card">
                                  <div className="flutter-carousel-bg">
                                    <div className="flutter-carousel-overlay"></div>
                                  </div>
                                  <div className="flutter-carousel-badge">
                                    <FaGraduationCap className="fc-icon" />
                                    <span>Learn</span>
                                  </div>
                                  <div className="flutter-carousel-bottom">
                                    <div className="flutter-play-btn">
                                      <FaExternalLinkAlt className="fp-icon" style={{ color: '#e03a2f' }} />
                                    </div>
                                    <div className="flutter-carousel-text">
                                      <span className="flutter-carousel-type">Read Article</span>
                                      <span className="flutter-carousel-hint">Tap to explore</span>
                                    </div>
                                    <span className="flutter-badge-domain">childrenofindia.in</span>
                                  </div>
                                </div>
                                <div className="flutter-carousel-indicators">
                                  <div className="fc-indicator"></div>
                                  <div className="fc-indicator active"></div>
                                  <div className="fc-indicator"></div>
                                </div>
                              </div>

                              {/* Quick Actions Header */}
                              <div className="flutter-section-header">
                                <div className="flutter-section-line"></div>
                                <h3 className="flutter-section-title">Quick Actions</h3>
                              </div>

                              {/* Action Grid */}
                              <div className="flutter-action-grid">
                                <div className="flutter-action-card qc-quiz">
                                  <div className="fac-icon-wrapper-blur blur-red"></div>
                                  <div className="fac-icon-wrapper"><FaLayerGroup /></div>
                                  <span>Quiz</span>
                                </div>
                                <div className="flutter-action-card qc-learn">
                                  <div className="fac-icon-wrapper-blur blur-blue"></div>
                                  <div className="fac-icon-wrapper"><FaPlay /></div>
                                  <span>Learn</span>
                                </div>
                                <div className="flutter-action-card qc-emergency">
                                  <div className="fac-icon-wrapper-blur blur-red"></div>
                                  <div className="fac-icon-wrapper"><FaAsterisk /></div>
                                  <span>Emergency</span>
                                </div>
                                <div className="flutter-action-card qc-profile">
                                  <div className="fac-icon-wrapper-blur blur-orange"></div>
                                  <div className="fac-icon-wrapper"><FaUser /></div>
                                  <span>Profile</span>
                                </div>
                                <div className="flutter-action-card qc-website">
                                  <div className="fac-icon-wrapper-blur blur-cyan"></div>
                                  <div className="fac-icon-wrapper"><FaGlobe /></div>
                                  <span>Website</span>
                                </div>
                                <div className="flutter-action-card qc-mail">
                                  <div className="fac-icon-wrapper-blur blur-yellow"></div>
                                  <div className="fac-icon-wrapper"><FaEnvelope /></div>
                                  <span>Mail Us</span>
                                </div>
                              </div>

                              {/* Bottom Navigation */}
                              <div className="flutter-bottom-nav">
                                <div className="nav-item active">
                                  <FaHome />
                                </div>
                                <div className="nav-item">
                                  <FaRegCompass />
                                </div>
                                <div className="nav-item">
                                  <FaRegComments />
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="hero-decoration decoration-1"></div>
                        <div className="hero-decoration decoration-2"></div>
                      </div>
                    </div>
                  </div>

                  {/* Background */}
                  <div className="hero-background">
                    <div className="bg-circle bg-circle-1"></div>
                    <div className="bg-circle bg-circle-2"></div>
                  </div>
                </section>

                {/* Features Section */}
                <section id="features" className="features-section">
                  <div className="container-width">
                    <div className="section-header">
                      <h2 className="section-title">Everything You Need to Succeed</h2>
                      <p className="section-subtitle">
                        Powerful features designed to help children learn effectively
                      </p>
                    </div>

                    <div className="features-grid">
                      {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <div className="feature-icon">
                            {feature.icon}
                          </div>
                          <h3 className="feature-title">{feature.title}</h3>
                          <p className="feature-description">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="testimonials-section">
                  <div className="container-width">
                    <div className="section-header">
                      <h2 className="section-title">What Our Users Say</h2>
                      <p className="section-subtitle">
                        Hear from the community about how GuardianCare is making a difference
                      </p>
                    </div>

                    <div className="testimonials-grid">
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                          <div className="quote-icon">
                            <div className="quote-bubble">
                              <span>"</span>
                            </div>
                          </div>

                          <div className="stars">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <FaStar key={i} className="star-icon" />
                            ))}
                          </div>

                          <blockquote className="testimonial-text">
                            "{testimonial.text}"
                          </blockquote>

                          <div className="testimonial-author">
                            <div className="author-avatar">
                              <span>{testimonial.name.charAt(0)}</span>
                            </div>
                            <div className="author-info">
                              <div className="author-name">{testimonial.name}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Trust indicators */}
                    <div className="trust-indicators">
                      <div className="trust-item">
                        <FaStar className="trust-icon" />
                        <span className="trust-value">5</span>
                        <span className="trust-label">rating</span>
                      </div>
                      <div className="trust-item">
                        <span className="trust-value">100%</span>
                        <span className="trust-label">ad-free experience</span>
                      </div>
                      <div className="trust-item">
                        <span className="trust-value">Safe</span>
                        <span className="trust-label">platform</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                  <div className="container-width">
                    <div className="cta-content">
                      <h2 className="cta-title">Ready to Learn and Grow?</h2>
                      <p className="cta-subtitle">
                        Join thousands of users discovering safety and wellness through GuardianCare.
                      </p>

                      <div className="cta-buttons">
                        <a
                          href="https://play.google.com/store/apps/details?id=app.guardiancare.guardiancare"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-white btn-large"
                        >
                          <FaGooglePlay className="btn-icon" />
                          Get on Play Store
                        </a>
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="btn-white btn-large"
                          style={{ opacity: 0.7, cursor: 'not-allowed' }}
                        >
                          <FaApple className="btn-icon" />
                          Coming Soon
                        </a>
                      </div>

                      <p className="cta-note">
                        <FaCheckCircle className="cta-note-icon" /> Educational • Secure • Community Formed
                      </p>
                    </div>
                  </div>

                  {/* Background decorations */}
                  <div className="cta-background">
                    <div className="cta-decoration cta-decoration-1"></div>
                    <div className="cta-decoration cta-decoration-2"></div>
                  </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                  <div className="container-width">
                    <div className="footer-grid">
                      {/* Company Info */}
                      <div className="footer-brand">
                        <h3 className="footer-logo">
                          <img src="/guardiancare_logo.png" alt="GuardianCare Logo" style={{ height: '30px', marginRight: '8px' }} />
                          GuardianCare
                        </h3>
                        <p className="footer-tagline">
                          Protecting and empowering the next generation.
                        </p>
                        <div className="footer-social">
                          <a href="mailto:hello@childrenofindia.in" className="social-link" aria-label="Email">
                            <FaEnvelope />
                          </a>
                          <a href="#" className="social-link" aria-label="Twitter">
                            <FaTwitter />
                          </a>
                          <a href="https://childrenofindia.in" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Website">
                            <FaLinkedin />
                          </a>
                        </div>
                      </div>

                      {/* Product Links */}
                      <div className="footer-section">
                        <h4 className="footer-heading">Product</h4>
                        <ul className="footer-links">
                          <li><Link to="/#features" className="footer-link">Features</Link></li>
                          <li><Link to="/#testimonials" className="footer-link">Testimonials</Link></li>
                          <li><a href="https://play.google.com/store/apps/details?id=app.guardiancare.guardiancare" target="_blank" rel="noopener noreferrer" className="footer-link">Download</a></li>
                        </ul>
                      </div>

                      {/* Company Links */}
                      <div className="footer-section">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                          <li><Link to="/about" className="footer-link">About</Link></li>
                          <li><Link to="/contact" className="footer-link">Contact</Link></li>
                          <li><a href="https://childrenofindia.in" target="_blank" rel="noopener noreferrer" className="footer-link">Website</a></li>
                        </ul>
                      </div>

                      {/* Legal Links */}
                      <div className="footer-section">
                        <h4 className="footer-heading">Legal</h4>
                        <ul className="footer-links">
                          <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                          <li><Link to="/delete-account" className="footer-link">Delete Account</Link></li>
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="footer-bottom">
                      <p className="footer-copyright">
                        © {new Date().getFullYear()} GuardianCare. All rights reserved.
                      </p>
                      <div className="footer-legal-links">
                        <Link to="/privacy" className="footer-legal-link">Privacy</Link>
                        <Link to="/delete-account" className="footer-legal-link">Delete Account</Link>
                      </div>
                    </div>
                  </div>
                </footer>
              </main>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
