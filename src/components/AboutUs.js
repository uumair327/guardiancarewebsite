import React from 'react';
import {
  FaMobileAlt,
  FaChartBar,
  FaShieldAlt,
  FaClock,
  FaHeart,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaGithub,
  FaLinkedin,
  FaArrowRight
} from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  const features = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile App First",
      description: "Built with a focus on cross-platform mobile access. Providing a smooth experience for parents and children."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Private",
      description: "Top-notch security to ensure all user data and forum posts are kept private and moderated."
    },
    {
      icon: <FaHeart />,
      title: "Mental Health Focus",
      description: "Dedicated resources and modules for mental health, helping kids navigate difficult situations."
    },
    {
      icon: <FaClock />,
      title: "Real-time Updates",
      description: "Live access to transit schedules, emergency contacts, and the latest safety policies."
    }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: "Child-Centric",
      description: "Every feature built is centered around the objective of safety and education for children."
    },
    {
      icon: <FaRocket />,
      title: "Impact Driven",
      description: "Focused on creating measurable social impact to reduce child exploitation and abuse."
    },
    {
      icon: <FaUsers />,
      title: "Community Focused",
      description: "Building strong communities for parents to share, support, and learn together."
    },
    {
      icon: <FaLightbulb />,
      title: "Educational",
      description: "Providing easy-to-understand content on the POCSO act and child rights."
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container-width">
          <div className="page-hero-content">
            <h1 className="page-hero-title">About GuardianCare</h1>
            <p className="page-hero-subtitle">
              An educational platform dedicated to child safety, mental health, and providing parents with the resources they need.
            </p>
          </div>
        </div>
        <div className="page-hero-bg">
          <div className="page-bg-circle page-bg-circle-1"></div>
          <div className="page-bg-circle page-bg-circle-2"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle">
              To provide a safe, engaging, and educational space for children to learn about their rights, prioritize mental health, and for parents to access vital child care resources.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Secure</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Free</div>
              <div className="stat-label">To Download</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">All</div>
              <div className="stat-label">Platforms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">Key Features</h2>
            <p className="section-subtitle">
              Everything you need to stay educated, connected, and safe
            </p>
          </div>

          <div className="about-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="about-feature-card">
                <div className="about-feature-icon">
                  {feature.icon}
                </div>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-subtitle">
              The principles that make GuardianCare the right choice for families
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card">
                <div className="about-value-icon">
                  {value.icon}
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">Children of India Foundation</h2>
            <p className="section-subtitle">
              Dedicated to protecting and empowering the next generation
            </p>
          </div>

          <div className="team-card-wrapper">
            <div className="team-card">
              <div className="team-info">
                <h3 className="team-name">Children of India Foundation</h3>
                <p className="team-role">Non-Profit Organization</p>
                <p className="team-bio">
                  We are a passionate team dedicated to revolutionizing child safety and education
                  through technology. Building GuardianCare to make essential resources simple and
                  accessible for every child and parent.
                </p>
                <div className="team-social">
                  <a href="https://childrenofindia.in" target="_blank" rel="noopener noreferrer" className="team-social-link">
                    <FaLightbulb />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta-section">
        <div className="container-width">
          <div className="page-cta-content">
            <h2 className="page-cta-title">Start Learning Today</h2>
            <p className="page-cta-subtitle">
              Download GuardianCare and experience a safe educational environment built specifically for the needs of modern families.
            </p>
            <a href="https://play.google.com/store/apps/details?id=app.guardiancare.guardiancare" target="_blank" rel="noopener noreferrer" className="btn-white btn-large">
              Download Now
              <FaArrowRight className="btn-arrow" />
            </a>
          </div>
        </div>
        <div className="page-cta-bg">
          <div className="page-cta-decoration page-cta-decoration-1"></div>
          <div className="page-cta-decoration page-cta-decoration-2"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
