import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="academic-badge">Educational Technology Platform</div>
          <h1>SchoolEdge CBT</h1>
          <p>
            The most advanced Computer-Based Testing platform designed specifically for schools
            and educational institutions. Create, manage, and deliver secure online exams
            with comprehensive analytics and automated grading.
          </p>
          {!isAuthenticated ? (
            <div>
              <Link to="/register" className="btn" style={{ marginRight: '16px' }}>
                Start Free Trial
              </Link>
              <Link to="/login" className="btn btn-secondary">
                School Login
              </Link>
            </div>
          ) : (
            <Link to="/subscriptions" className="btn">
              Manage School Plan
            </Link>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <div className="features">
          <div className="feature">
            <h3>🎯 Advanced Test Creation</h3>
            <p>
              Create comprehensive exams with multiple question types including multiple choice,
              essay questions, drag-and-drop, and interactive elements. Build question banks
              and randomize tests for academic integrity.
            </p>
          </div>

          <div className="feature">
            <h3>🔒 Secure Testing Environment</h3>
            <p>
              Ensure exam security with lockdown browsers, time limits, and anti-cheating measures.
              Monitor student activity in real-time and maintain academic integrity standards.
            </p>
          </div>

          <div className="feature">
            <h3>� Instant Results & Analytics</h3>
            <p>
              Get immediate grading for objective questions and detailed analytics on student
              performance. Track class progress, identify learning gaps, and generate comprehensive reports.
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="features">
          <div className="feature">
            <h3>👥 Student Management</h3>
            <p>
              Easily manage student accounts, create classes, and organize students by grade levels
              or subjects. Bulk import student data and integrate with existing school systems.
            </p>
          </div>

          <div className="feature">
            <h3>� Multi-Device Support</h3>
            <p>
              Students can take tests on any device - computers, tablets, or smartphones.
              Responsive design ensures optimal experience across all screen sizes.
            </p>
          </div>

          <div className="feature">
            <h3>🎓 Grade Management</h3>
            <p>
              Automatically calculate grades, export gradebooks, and integrate with popular
              Learning Management Systems. Customize grading scales and rubrics.
            </p>
          </div>
        </div>

        <div className="section-divider"></div>

        {/* School Plans */}
        <section style={{ marginTop: '80px' }}>
          <div className="page-header" style={{ margin: '0 -20px 60px -20px', padding: '60px 20px' }}>
            <h2 className="page-title">Choose Your School Plan</h2>
            <p className="page-subtitle">
              Flexible pricing designed for schools of all sizes, from small private institutions to large school districts
            </p>
          </div>

          <div className="features">
            <div className="card">
              <div className="academic-badge">Small Schools</div>
              <h3>Starter Plan</h3>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '24px' }}>$29/month</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Perfect for schools with up to 100 students</p>
              <ul style={{ textAlign: 'left', lineHeight: '2', marginBottom: '32px' }}>
                <li>Up to 100 active students</li>
                <li>5 teacher accounts</li>
                <li>Basic question types</li>
                <li>Standard reporting</li>
                <li>Email support</li>
                <li>1GB storage</li>
              </ul>
              {!isAuthenticated ? (
                <Link to="/register" className="btn" style={{ width: '100%' }}>
                  Start Free Trial
                </Link>
              ) : (
                <Link to="/subscriptions" className="btn" style={{ width: '100%' }}>
                  Select Plan
                </Link>
              )}
            </div>

            <div className="card pricing-highlight">
              <div className="academic-badge">Most Popular</div>
              <h3>Professional Plan</h3>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '24px' }}>$89/month</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Ideal for medium-sized schools and academies</p>
              <ul style={{ textAlign: 'left', lineHeight: '2', marginBottom: '32px' }}>
                <li>Up to 500 active students</li>
                <li>25 teacher accounts</li>
                <li>Advanced question types</li>
                <li>Detailed analytics & reporting</li>
                <li>Priority support</li>
                <li>10GB storage</li>
                <li>LMS integration</li>
                <li>Custom branding</li>
              </ul>
              {!isAuthenticated ? (
                <Link to="/register" className="btn" style={{ width: '100%' }}>
                  Start Free Trial
                </Link>
              ) : (
                <Link to="/subscriptions" className="btn" style={{ width: '100%' }}>
                  Select Plan
                </Link>
              )}
            </div>

            <div className="card">
              <div className="academic-badge">Large Institutions</div>
              <h3>Enterprise Plan</h3>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '24px' }}>$249/month</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Comprehensive solution for large schools and districts</p>
              <ul style={{ textAlign: 'left', lineHeight: '2', marginBottom: '32px' }}>
                <li>Unlimited students</li>
                <li>Unlimited teacher accounts</li>
                <li>All question types & features</li>
                <li>Advanced analytics dashboard</li>
                <li>24/7 dedicated support</li>
                <li>Unlimited storage</li>
                <li>Full API access</li>
                <li>Custom integrations</li>
                <li>White-label solution</li>
              </ul>
              {!isAuthenticated ? (
                <Link to="/register" className="btn" style={{ width: '100%' }}>
                  Contact Sales
                </Link>
              ) : (
                <Link to="/subscriptions" className="btn" style={{ width: '100%' }}>
                  Select Plan
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section style={{ textAlign: 'center', padding: '80px 0' }}>
          <h2 style={{ marginBottom: '24px', color: 'var(--primary-color)', fontSize: '2.5rem' }}>
            Download SchoolEdge CBT
          </h2>
          <p style={{ marginBottom: '40px', color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Install our desktop application for the complete testing experience.
            Enhanced security features and offline capabilities included.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn" style={{ fontSize: '18px', padding: '16px 32px' }}>
              📱 Download for Windows
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '18px', padding: '16px 32px' }}>
              🍎 Download for macOS
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '18px', padding: '16px 32px' }}>
              🐧 Download for Linux
            </button>
          </div>

          <div style={{ marginTop: '40px', padding: '24px', backgroundColor: 'var(--gray-50)', borderRadius: '12px', maxWidth: '500px', margin: '40px auto 0 auto' }}>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '16px' }}>System Requirements</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              • Windows 10+ / macOS 10.14+ / Ubuntu 18.04+<br/>
              • 4GB RAM minimum (8GB recommended)<br/>
              • 2GB available storage space<br/>
              • Stable internet connection
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default LandingPage;
