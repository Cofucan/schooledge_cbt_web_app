import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="academic-badge">Flexible, Robust & Secure CBT Platform</div>
          <h1>Administer Computer-Based Exams With Ease</h1>
          <p>
            SchoolEdge CBT enables your school to conduct secure, computer-based exams using your own questions and manage academic content with full control. Run exams offline (LAN) or online, and protect your intellectual property—only licensed users can access your content.
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
            <h3>🖥️ Offline & Online Exams</h3>
            <p>
              Conduct exams in-venue (offline, LAN/wireless) or remotely (online). Run both modes simultaneously for maximum flexibility.
            </p>
          </div>
          <div className="feature">
            <h3>🔒 Secure Content Management</h3>
            <p>
              Protect your exam questions and academic resources. Only licensed users can access content, ensuring your intellectual property is safe.
            </p>
          </div>
          <div className="feature">
            <h3>⚡ Easy Setup & Licensing</h3>
            <p>
              Download, install, and get started in minutes. Flexible licensing per subject or content, with discounts for bulk purchases.
            </p>
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <h3>📊 Powerful Analytics</h3>
            <p>
              Get instant results, monitor candidate progress, and generate detailed reports for continuous assessment and improvement.
            </p>
          </div>
          <div className="feature">
            <h3>👩‍🏫 Multi-Role Management</h3>
            <p>
              Manage candidates, teachers, and content with ease. Assign roles, set up virtual classes, and control access from a central admin panel.
            </p>
          </div>
          <div className="feature">
            <h3>🛡️ Device Monitoring & Control</h3>
            <p>
              Monitor and control all connected devices during exams. Ensure compliance and maintain exam integrity at all times.
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
