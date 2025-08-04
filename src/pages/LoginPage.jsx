import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
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
    setLoading(true);

    const result = await login(formData.email, formData.password);

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
            School Login
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Access your SchoolEdge CBT dashboard
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
            <label htmlFor="email">School Email Address</label>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn"
            disabled={loading}
            style={{ width: '100%', marginBottom: '24px', padding: '16px' }}
          >
            {loading ? 'Signing In...' : 'Sign In to Dashboard'}
          </button>
        </form>

        <div style={{ textAlign: 'center', borderTop: '1px solid var(--gray-200)', paddingTop: '24px' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Don't have a school account?
          </p>
          <Link
            to="/register"
            className="btn btn-secondary"
            style={{ marginBottom: '16px', width: '100%' }}
          >
            Register Your School
          </Link>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            <Link to="/" style={{ color: 'var(--primary-color)' }}>
              ← Back to Home
            </Link>
          </p>
        </div>

        <div style={{
          marginTop: '32px',
          padding: '20px',
          backgroundColor: 'var(--gray-50)',
          borderRadius: '8px',
          fontSize: '14px',
          color: 'var(--text-secondary)'
        }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '12px', fontSize: '0.875rem' }}>
            Need Help?
          </h4>
          <p style={{ margin: '0', lineHeight: '1.5' }}>
            Contact our support team at <strong>support@schooledge.com</strong> or call <strong>1-800-SCHOOL-1</strong>
            for assistance with your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
