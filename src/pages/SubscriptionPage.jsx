import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const SubscriptionPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [availablePlans, setAvailablePlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { user } = useAuth();

  // Mock data for demonstration - Updated for CBT context
  const mockPlans = [
    {
      id: 1,
      name: 'Starter Plan',
      price: 29,
      interval: 'month',
      studentLimit: 100,
      teacherLimit: 5,
      features: ['Up to 100 students', '5 teacher accounts', 'Basic question types', 'Standard reporting', 'Email support', '1GB storage']
    },
    {
      id: 2,
      name: 'Professional Plan',
      price: 89,
      interval: 'month',
      studentLimit: 500,
      teacherLimit: 25,
      features: ['Up to 500 students', '25 teacher accounts', 'Advanced question types', 'Detailed analytics', 'Priority support', '10GB storage', 'LMS integration', 'Custom branding']
    },
    {
      id: 3,
      name: 'Enterprise Plan',
      price: 249,
      interval: 'month',
      studentLimit: 'Unlimited',
      teacherLimit: 'Unlimited',
      features: ['Unlimited students', 'Unlimited teachers', 'All question types', 'Advanced analytics', '24/7 support', 'Unlimited storage', 'API access', 'Custom integrations', 'White-label solution']
    }
  ];

  const mockSubscriptions = [
    {
      id: 1,
      planName: 'Professional Plan',
      status: 'active',
      startDate: '2024-01-15',
      nextBilling: '2024-02-15',
      amount: 89,
      studentLimit: 500,
      teacherLimit: 25,
      currentStudents: 234,
      currentTeachers: 12
    }
  ];

  useEffect(() => {
    fetchSubscriptions();
    fetchAvailablePlans();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      // Replace with your actual API endpoint
      // const response = await axios.get('/api/subscriptions');
      // setSubscriptions(response.data);

      // Using mock data for now
      setSubscriptions(mockSubscriptions);
    } catch (error) {
      setError('Failed to fetch school plan information');
    }
  };

  const fetchAvailablePlans = async () => {
    try {
      // Replace with your actual API endpoint
      // const response = await axios.get('/api/subscription-plans');
      // setAvailablePlans(response.data);

      // Using mock data for now
      setAvailablePlans(mockPlans);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch available plans');
      setLoading(false);
    }
  };

  const handleSubscribe = async (planId) => {
    try {
      setError('');
      setSuccess('');

      // Replace with your actual API endpoint
      // const response = await axios.post('/api/subscriptions', { planId });

      // Mock success response
      setSuccess('Successfully subscribed! Your school plan is now active and you can start creating tests.');

      // Refresh subscriptions
      fetchSubscriptions();
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to subscribe to plan');
    }
  };

  const handleCancelSubscription = async (subscriptionId) => {
    if (!window.confirm('Are you sure you want to cancel this school plan? This will affect all teachers and students.')) {
      return;
    }

    try {
      setError('');
      setSuccess('');

      // Replace with your actual API endpoint
      // await axios.delete(`/api/subscriptions/${subscriptionId}`);

      setSuccess('School plan cancelled successfully');
      fetchSubscriptions();
    } catch (error) {
      setError('Failed to cancel school plan');
    }
  };

  const handleDownloadApp = () => {
    // Trigger download
    setSuccess('Download started! Check your downloads folder for SchoolEdge CBT installer.');
  };

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
        <div className="logo-icon" style={{ margin: '0 auto 20px auto' }}>SE</div>
        <h2 style={{ color: 'var(--text-secondary)' }}>Loading school dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header" style={{ margin: '0 -20px 40px -20px' }}>
        <h1 className="page-title">School Plan Management</h1>
        <p className="page-subtitle">
          Manage your SchoolEdge CBT subscription and download the testing application
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

      {success && (
        <div style={{
          backgroundColor: 'rgba(5, 150, 105, 0.1)',
          color: 'var(--secondary-color)',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '24px',
          border: '1px solid rgba(5, 150, 105, 0.2)',
          fontWeight: '500'
        }}>
          {success}
        </div>
      )}

      {/* Current School Plan */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '24px', fontSize: '1.5rem' }}>
          Current School Plan
        </h2>

        {subscriptions.length === 0 ? (
          <div className="card">
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div className="logo-icon" style={{ margin: '0 auto 20px auto', opacity: '0.6' }}>SE</div>
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                No Active School Plan
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                Your school doesn't have an active SchoolEdge CBT plan yet. Choose a plan below to get started.
              </p>
            </div>
          </div>
        ) : (
          <div>
            {subscriptions.map(subscription => (
              <div key={subscription.id} className="card">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '32px', alignItems: 'start' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                      <h3 style={{ margin: '0', color: 'var(--primary-color)' }}>{subscription.planName}</h3>
                      <span className={`status-${subscription.status}`}>
                        {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '24px' }}>
                      <div>
                        <p style={{ margin: '0 0 8px 0', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Student Usage
                        </p>
                        <p style={{ margin: '0', color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: '600' }}>
                          {subscription.currentStudents} / {subscription.studentLimit}
                        </p>
                      </div>

                      <div>
                        <p style={{ margin: '0 0 8px 0', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Teacher Accounts
                        </p>
                        <p style={{ margin: '0', color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: '600' }}>
                          {subscription.currentTeachers} / {subscription.teacherLimit}
                        </p>
                      </div>

                      <div>
                        <p style={{ margin: '0 0 8px 0', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Next Billing
                        </p>
                        <p style={{ margin: '0', color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: '600' }}>
                          {new Date(subscription.nextBilling).toLocaleDateString()}
                        </p>
                      </div>

                      <div>
                        <p style={{ margin: '0 0 8px 0', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Monthly Cost
                        </p>
                        <p style={{ margin: '0', color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: '600' }}>
                          ${subscription.amount}/month
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '200px' }}>
                    <button
                      onClick={handleDownloadApp}
                      className="btn"
                      style={{ width: '100%' }}
                    >
                      Download CBT App
                    </button>
                    <button
                      onClick={() => handleCancelSubscription(subscription.id)}
                      className="btn btn-danger"
                      style={{ width: '100%' }}
                    >
                      Cancel Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Available Plans */}
      <section>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '24px', fontSize: '1.5rem' }}>
          Available School Plans
        </h2>

        <div className="features">
          {availablePlans.map(plan => (
            <div key={plan.id} className={`card ${plan.name === 'Professional Plan' ? 'pricing-highlight' : ''}`}>
              <div className="academic-badge">{plan.name === 'Starter Plan' ? 'Small Schools' : plan.name === 'Professional Plan' ? 'Most Popular' : 'Large Institutions'}</div>
              <h3 style={{ marginBottom: '8px', color: 'var(--primary-color)' }}>{plan.name}</h3>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '8px', fontSize: '2.5rem' }}>
                ${plan.price}<span style={{ fontSize: '1rem', fontWeight: '400' }}>/{plan.interval}</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.875rem' }}>
                {plan.studentLimit === 'Unlimited' ? 'Unlimited students' : `Up to ${plan.studentLimit} students`} •
                {plan.teacherLimit === 'Unlimited' ? ' Unlimited teachers' : ` ${plan.teacherLimit} teachers`}
              </p>

              <ul style={{ textAlign: 'left', lineHeight: '1.8', marginBottom: '32px', paddingLeft: '0', listStyle: 'none' }}>
                {plan.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan.id)}
                className="btn"
                style={{ width: '100%', padding: '16px' }}
              >
                {plan.name === 'Enterprise Plan' ? 'Contact Sales' : 'Select This Plan'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CBT App Download Section */}
      <section style={{ textAlign: 'center', padding: '80px 20px', borderTop: '1px solid var(--gray-200)', marginTop: '80px' }}>
        <h2 style={{ marginBottom: '24px', color: 'var(--primary-color)', fontSize: '2rem' }}>
          Download SchoolEdge CBT Application
        </h2>
        <p style={{ marginBottom: '40px', color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          Install our secure testing application for the complete CBT experience.
          {subscriptions.length > 0 ? ' Your active plan includes full access to all features.' : ' Requires an active school plan.'}
        </p>

        {subscriptions.length > 0 ? (
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={handleDownloadApp}
              className="btn"
              style={{ fontSize: '18px', padding: '16px 32px' }}
            >
              📱 Windows (Recommended)
            </button>
            <button
              onClick={handleDownloadApp}
              className="btn btn-secondary"
              style={{ fontSize: '18px', padding: '16px 32px' }}
            >
              🍎 macOS
            </button>
            <button
              onClick={handleDownloadApp}
              className="btn btn-secondary"
              style={{ fontSize: '18px', padding: '16px 32px' }}
            >
              🐧 Linux
            </button>
          </div>
        ) : (
          <div>
            <p style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '24px' }}>
              Please subscribe to a school plan to download the CBT application.
            </p>
            <button
              disabled
              className="btn"
              style={{ fontSize: '18px', padding: '16px 32px', opacity: '0.5', cursor: 'not-allowed' }}
            >
              Download Requires Active Plan
            </button>
          </div>
        )}

        <div style={{
          marginTop: '40px',
          padding: '24px',
          backgroundColor: 'var(--gray-50)',
          borderRadius: '12px',
          maxWidth: '600px',
          margin: '40px auto 0 auto'
        }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '16px' }}>Application Features</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', textAlign: 'left' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: '0' }}>
                • Secure exam delivery<br/>
                • Lockdown browser mode<br/>
                • Offline test capability
              </p>
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: '0' }}>
                • Real-time monitoring<br/>
                • Automatic submission<br/>
                • Cross-platform support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPage;
