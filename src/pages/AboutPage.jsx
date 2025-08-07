import React from 'react';

const AboutPage = () => (
  <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
    <div className="page-header">
      <h1 className="page-title">About SchoolEdge CBT</h1>
      <p className="page-subtitle">
        The flexible, robust, and secure platform for administering computer-based exams and managing academic content in schools.
      </p>
    </div>
    <div className="card fade-in-up" style={{ marginBottom: 32 }}>
      <h2 style={{ color: 'var(--primary-color)' }}>Why SchoolEdge CBT?</h2>
      <p>
        Tired of the stress of administering exams and managing content? SchoolEdge CBT is here to help! Our platform enables schools to conduct computer-based exams using their own questions and manage academic content securely, ensuring only licensed users have access. Exams can be conducted offline (LAN/wireless) or online, and you can run both modes simultaneously.
      </p>
      <ul style={{ marginTop: 16, marginBottom: 0, paddingLeft: 20 }}>
        <li>Offline and online exam support</li>
        <li>Secure content management and licensing</li>
        <li>Easy setup and installation</li>
        <li>Flexible licensing per subject/content</li>
        <li>Powerful analytics and reporting</li>
        <li>Device monitoring and control</li>
        <li>Multi-role management (admin, teacher, candidate)</li>
      </ul>
    </div>
    <div className="features">
      <div className="feature">
        <h3>Setup</h3>
        <p>Simply download and install the application, then follow the video guide for setup. Everything is simplified for you and your staff.</p>
      </div>
      <div className="feature">
        <h3>Purchase License</h3>
        <p>Flexible licensing: pay per subject or content, with discounts for bulk purchases. Manage all licenses from your admin dashboard.</p>
      </div>
      <div className="feature">
        <h3>Take Exam</h3>
        <p>Candidates can take exams or access assigned content once licensed. The client app supports local server (offline), online, and virtual class modes.</p>
      </div>
    </div>
    <div className="section-divider"></div>
    <div className="card fade-in-up">
      <h2 style={{ color: 'var(--primary-color)' }}>Platform Capabilities</h2>
      <ul style={{ marginTop: 16, marginBottom: 0, paddingLeft: 20 }}>
        <li>Manage exam and virtual class content</li>
        <li>Candidate and teacher management</li>
        <li>Networking client applications (LAN/online)</li>
        <li>Test configuration and settings</li>
        <li>Monitor/control client devices</li>
        <li>Automated grading and score cards</li>
        <li>Send notifications/SMS to candidates</li>
        <li>Comprehensive analytics and reporting</li>
      </ul>
    </div>
  </div>
);

export default AboutPage;
