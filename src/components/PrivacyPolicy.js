import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaShieldAlt,
  FaDatabase,
  FaCog,
  FaLock,
  FaLink,
  FaUserCheck,
  FaBaby,
  FaSync,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaGooglePlay,
  FaApple,
  FaComments
} from 'react-icons/fa';
import './PrivacyPolicy.css';

const PRIMARY_COLOR = '#6366f1';
const BACKGROUND_COLOR = '#f8fafc';
const TEXT_COLOR = '#1e293b';
const SUBTITLE_COLOR = '#64748b';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const privacyPolicySections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: FaShieldAlt,
      content: `GuardianCare is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our educational application.

Last updated: ${new Date().toLocaleDateString()}

Your Privacy Rights:
• You have complete control over your data
• Account deletion is available instantly through the app
• All data can be permanently removed at any time
• We never sell your personal information

By using GuardianCare, you agree to the collection and use of information in accordance with this policy.`
    },
    {
      id: 'data_collection',
      title: 'Information We Collect',
      icon: FaDatabase,
      content: `We collect the following types of information:

Personal Information:
• Name and email address (required for account creation)
• Phone number (optional, for account verification)
• Profile pictures (optional, stored securely)
• Google account information (when using Google Sign-In)
• Apple ID information (when using Apple Sign-In)

Educational Data:
• Quiz scores and module completion records
• Learning progress and history
• Selected preferences for mental health and child safety modules

Community & Social Data:
• Forum posts and comments
• Anonymized interactions in community discussions
• Pinned resources and saved content

Authentication Data:
• Email/password credentials (for traditional sign-in)
• Google account credentials (for Google Sign-In)
• Apple ID credentials (for Apple Sign-In)
• Authentication tokens and session data

Technical Information:
• Device information and operating system
• App usage patterns and navigation data
• Local app preferences and settings
• Network information for connectivity

Device Permissions:
• Notifications (for important updates)
• Photo library access (for optional profile pictures)
• Phone permissions (for emergency SOS contacts)
• Storage access (for saving offline resources)`
    },
    {
      id: 'data_usage',
      title: 'How We Use Your Information',
      icon: FaCog,
      content: `We use your information to:

Core Functionality:
• Provide dynamic educational resources and progress tracking
• Calculate quiz scores and learning insights
• Enable access to safe community forums and child safety modules
• Maintain emergency contact synchronization

Account Management:
• Create and maintain your user account
• Authenticate your identity through email/password, Google Sign-In, or Apple Sign-In
• Secure your account
• Send important account-related notifications
• Provide customer support when needed

App Improvement:
• Analyze usage patterns to improve app functionality
• Identify and fix technical issues
• Develop new educational features based on user needs
• Optimize performance and user experience

Communication:
• Send account verification emails
• Provide password reset functionality
• Respond to feedback and support requests

We do NOT use your educational or community data for advertising or sell your information to third parties.`
    },
    {
      id: 'data_storage',
      title: 'Data Storage & Security',
      icon: FaLock,
      content: `Cloud Storage:
Your data is securely stored using Supabase or Firebase services:
• Authentication data and educational records are heavily encrypted
• Forum posts and profile pictures are stored securely
• All data transmission is encrypted using industry-standard protocols

Local Storage:
Some data is stored locally on your device:
• App preferences and settings
• Temporary session information
• Onboarding status
• Authentication tokens (encrypted)

Security Measures:
• End-to-end encryption for data transmission
• Secure authentication using robust OAuth 2.0 services
• Regular security updates and monitoring
• Access controls and user permission systems
• Strict moderation system for community forums

Google & Apple Sign-In Security:
• Uses secure OAuth 2.0 authentication
• No passwords stored for authenticated accounts
• Automatic token refresh and session management

Data Retention:
• Your data is retained while your account is active
• You can delete your account instantly through the app's Account Actions
• Complete data removal includes all interactions, quiz scores, and profile information
• Inactive accounts may be securely archived after extended periods`
    },
    {
      id: 'third_party',
      title: 'Third-Party Services',
      icon: FaLink,
      content: `GuardianCare uses the following third-party services:

Cloud Services:
• Supabase / Firebase for secure login/signup and data storage
• Content Delivery Networks for learning modules
• Subject to the respective service's Privacy Policy

Authentication Providers:
• Google OAuth 2.0 for secure authentication
• Apple OAuth 2.0 for secure authentication

No Data Selling:
We do not sell, trade, or rent your personal information to third parties. Any third-party integrations are solely for app functionality and are governed by their respective privacy policies.

Analytics:
We may use anonymized analytics to understand app usage patterns, but this data cannot be linked back to individual users.`
    },
    {
      id: 'user_rights',
      title: 'Your Rights & Choices',
      icon: FaUserCheck,
      content: `You have the following rights regarding your personal data:

Access & Control:
• View and edit your profile information
• Delete your forum comments or interactions
• Update privacy preferences
• Manage Google Sign-In account linking

Authentication Management:
• Switch authentication methods securely
• Unlink connected platforms from GuardianCare

Deletion Rights:
• Delete individual interactions or posts
• Close your account and delete all associated data
• Use the in-app account deletion feature for immediate removal
• Request immediate data removal through customer support

Account Deletion Process:
• Access "Account Actions" in your profile settings
• Complete the secure deletion process with confirmations
• All data is permanently removed including progress and profile metrics
• Account deletion cannot be reversed once completed

Consent Management:
• Withdraw consent for data processing at any time
• Opt out of non-essential data collection
• Control what information is shared on community platforms`
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      icon: FaBaby,
      content: `GuardianCare is an educational application intended for use by both children and parents. We take children's privacy extremely seriously.

• Registration may require parental consent or oversight
• We limit the collection of personal information from children to only what is strictly necessary for educational tracking
• Community forums are strictly moderated to protect minors
• We comply with COPPA (Children's Online Privacy Protection Act) and similar global guidelines

If you are a parent or guardian and believe your child has provided us with unneeded personal information, please contact us immediately so we can delete such information.`
    },
    {
      id: 'changes',
      title: 'Privacy Policy Updates',
      icon: FaSync,
      content: `We may update this Privacy Policy from time to time to reflect:
• Changes in our data practices
• New features or educational modules
• Legal or regulatory requirements
• Security improvements

Notification:
• We will notify you of significant changes through the app
• Updated policies will be posted with a new "last updated" date
• Continued use of the app constitutes acceptance of changes`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: FaEnvelope,
      content: `If you have questions about this Privacy Policy or your data:

Contact Us Feature:
Use the built-in contact feature or reach out directly via email.

Email:
hello@childrenofindia.in

Response Time:
We aim to respond to all privacy-related inquiries within 48-72 hours.`
    }
  ];

  const ExpandableSection = ({ section }) => {
    const isExpanded = expandedSections[section.id];
    const IconComponent = section.icon;

    return (
      <div className="privacy-section-card" key={section.id}>
        <button
          className="privacy-section-header"
          onClick={() => toggleSection(section.id)}
          aria-expanded={isExpanded}
        >
          <div className="privacy-section-header-left">
            <div className="privacy-icon-container">
              <IconComponent size={24} />
            </div>
            <h3 className="privacy-section-title">{section.title}</h3>
          </div>
          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>

        {isExpanded && (
          <div className="privacy-section-content">
            <div className="privacy-divider"></div>
            <div className="privacy-content-text">
              {section.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">

        {/* Header Section */}
        <div className="privacy-header-section">
          <div className="privacy-header-icon">
            <FaShieldAlt size={48} />
          </div>
          <h1 className="privacy-header-title">Privacy Policy</h1>
          <p className="privacy-header-subtitle">
            Your privacy matters to us. Learn how we collect, use, and protect your data with complete transparency.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="privacy-summary-card">
          <div className="privacy-summary-content">
            <h2 className="privacy-summary-title">Quick Summary</h2>
            <p className="privacy-summary-text">
              GuardianCare collects only the data necessary to provide educational and safety services.
              We use secure, enterprise-grade infrastructure, never sell your data, and give you complete control
              over your information. Click any section below for detailed information.
            </p>
          </div>
        </div>

        {/* Download Buttons Section */}
        <div className="download-buttons-section">
          <h2>Get GuardianCare</h2>
          <div className="download-buttons-container">
            <a
              href="https://play.google.com/store/apps/details?id=app.guardiancare.guardiancare"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <FaGooglePlay size={24} />
              <div className="download-btn-text">
                <span className="download-btn-title">Get it on</span>
                <span className="download-btn-store">Google Play</span>
              </div>
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); }}
              className="download-btn"
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
            >
              <FaApple size={24} />
              <div className="download-btn-text">
                <span className="download-btn-title">Download on the</span>
                <span className="download-btn-store">App Store</span>
              </div>
            </a>
          </div>
          <p className="download-note">
            GuardianCare is available on Google Play! App Store release coming soon.
          </p>
        </div>

        {/* Privacy Policy Sections */}
        <div className="privacy-sections-container">
          <h2>Privacy Policy Details</h2>
          {privacyPolicySections.map(section => (
            <ExpandableSection key={section.id} section={section} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="privacy-action-buttons">
          <Link to="/contact" className="privacy-primary-button">
            <FaComments size={20} />
            Contact Support
          </Link>

          <button
            className="privacy-secondary-button"
            onClick={() => handleExternalLink('https://childrenofindia.in')}>
            <FaLink size={20} />
            Children of India Foundation
          </button>
        </div>

        {/* Footer */}
        <div className="privacy-footer">
          <p className="privacy-footer-text">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="privacy-footer-text">
            GuardianCare
          </p>
          <p className="privacy-footer-text">
            <Link to="/">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
