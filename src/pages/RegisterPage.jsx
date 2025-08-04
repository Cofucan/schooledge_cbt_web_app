import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    adminName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (!formData.schoolName.trim()) {
      setError('School name is required');
      return;
    }

    setLoading(true);

    const result = await register({
      name: formData.adminName,
      email: formData.email,
      password: formData.password,
      schoolName: formData.schoolName,
      phone: formData.phone
    });

    if (result.success) {
      navigate('/subscriptions');
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="form-container fade-in-up">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="logo-icon" style={{ margin: '0 auto 16px auto' }}>SE</div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '8px', fontSize: '2rem' }}>
            Register Your School
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Start your free trial of SchoolEdge CBT
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: 'rgba(220, 38, 38, 0.1)',
            color: 'var(--accent-color)',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
            border: '1px solid rgba(220, 38, 38, 0.2)',
            fontWeight: '500'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="schoolName">School/Institution Name *</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="e.g., Springfield High School"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="adminName">Administrator Full Name *</label>
            <input
              type="text"
              id="adminName"
              name="adminName"
              value={formData.adminName}
              onChange={handleChange}
              placeholder="e.g., Dr. John Smith"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">School Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@yourschool.edu"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">School Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Minimum 8 characters"
              required
              minLength="8"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn"
            disabled={loading}
            style={{ width: '100%', marginBottom: '24px', padding: '16px' }}
          >
            {loading ? 'Creating Account...' : 'Start Free Trial'}
          </button>
        </form>

        <div style={{ textAlign: 'center', borderTop: '1px solid var(--gray-200)', paddingTop: '24px' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Already have a school account?
          </p>
          <Link
            to="/login"
            className="btn btn-secondary"
            style={{ marginBottom: '16px', width: '100%' }}
          >
            Sign In to Dashboard
          </Link>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            <Link to="/" style={{ color: 'var(--primary-color)' }}>
              ← Back to Home
            </Link>
          </p>
        </div>

        <div style={{
          marginTop: '32px',
          padding: '24px',
          backgroundColor: 'var(--gray-50)',
          borderRadius: '8px',
          fontSize: '14px',
          color: 'var(--text-secondary)'
        }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '16px', fontSize: '0.875rem' }}>
            Your Free Trial Includes:
          </h4>
          <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.6' }}>
            <li>30-day full access to all features</li>
            <li>Up to 50 student accounts</li>
            <li>Unlimited test creation</li>
            <li>Basic analytics and reporting</li>
            <li>Email support during trial period</li>
          </ul>
          <p style={{ marginTop: '16px', fontSize: '0.8rem', fontStyle: 'italic' }}>
            No credit card required. Cancel anytime during trial period.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
