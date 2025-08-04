import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [schools, setSchools] = useState([]);
  const [stats, setStats] = useState({
    totalSchools: 0,
    activeSubscriptions: 0,
    monthlyRevenue: 0,
    totalStudents: 0,
    totalTeachers: 0,
    testsCreated: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for demonstration - Updated for educational context
  const mockSchools = [
    {
      id: 1,
      schoolName: 'Springfield High School',
      adminName: 'Dr. John Smith',
      adminEmail: 'admin@springfield.edu',
      joinDate: '2024-01-15',
      status: 'active',
      subscription: 'Professional Plan',
      studentCount: 234,
      teacherCount: 12,
      location: 'Springfield, IL'
    },
    {
      id: 2,
      schoolName: 'Riverside Academy',
      adminName: 'Prof. Jane Wilson',
      adminEmail: 'principal@riverside.edu',
      joinDate: '2024-01-20',
      status: 'active',
      subscription: 'Starter Plan',
      studentCount: 87,
      teacherCount: 5,
      location: 'Riverside, CA'
    },
    {
      id: 3,
      schoolName: 'Central College Prep',
      adminName: 'Dr. Robert Johnson',
      adminEmail: 'admin@centralprep.edu',
      joinDate: '2024-01-25',
      status: 'trial',
      subscription: 'Trial',
      studentCount: 156,
      teacherCount: 8,
      location: 'Central City, TX'
    }
  ];

  const mockSubscriptions = [
    {
      id: 1,
      schoolId: 1,
      schoolName: 'Springfield High School',
      adminEmail: 'admin@springfield.edu',
      planName: 'Professional Plan',
      status: 'active',
      startDate: '2024-01-15',
      nextBilling: '2024-02-15',
      amount: 89,
      studentLimit: 500,
      teacherLimit: 25,
      currentStudents: 234,
      currentTeachers: 12
    },
    {
      id: 2,
      schoolId: 2,
      schoolName: 'Riverside Academy',
      adminEmail: 'principal@riverside.edu',
      planName: 'Starter Plan',
      status: 'active',
      startDate: '2024-01-20',
      nextBilling: '2024-02-20',
      amount: 29,
      studentLimit: 100,
      teacherLimit: 5,
      currentStudents: 87,
      currentTeachers: 5
    }
  ];

  const mockStats = {
    totalSchools: 3,
    activeSubscriptions: 2,
    monthlyRevenue: 118,
    totalStudents: 477,
    totalTeachers: 25,
    testsCreated: 1248
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Replace with your actual API endpoints
      // const [schoolsRes, subscriptionsRes, statsRes] = await Promise.all([
      //   axios.get('/api/admin/schools'),
      //   axios.get('/api/admin/subscriptions'),
      //   axios.get('/api/admin/stats')
      // ]);

      // setSchools(schoolsRes.data);
      // setSubscriptions(subscriptionsRes.data);
      // setStats(statsRes.data);

      // Using mock data for now
      setSchools(mockSchools);
      setSubscriptions(mockSubscriptions);
      setStats(mockStats);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch platform data');
      setLoading(false);
    }
  };

  const handleCancelSubscription = async (subscriptionId) => {
    if (!window.confirm('Are you sure you want to cancel this school subscription? This will affect all teachers and students at this school.')) {
      return;
    }

    try {
      // Replace with your actual API endpoint
      // await axios.put(`/api/admin/subscriptions/${subscriptionId}/cancel`);

      alert('School subscription cancelled successfully');
      fetchData();
    } catch (error) {
      setError('Failed to cancel school subscription');
    }
  };

  const handleToggleSchoolStatus = async (schoolId) => {
    try {
      // Replace with your actual API endpoint
      // await axios.put(`/api/admin/schools/${schoolId}/toggle-status`);

      alert('School status updated successfully');
      fetchData();
    } catch (error) {
      setError('Failed to update school status');
    }
  };

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
        <div className="logo-icon" style={{ margin: '0 auto 20px auto' }}>SE</div>
        <h2 style={{ color: 'var(--text-secondary)' }}>Loading platform dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header" style={{ margin: '0 -20px 40px -20px' }}>
        <h1 className="page-title">SchoolEdge CBT Administration</h1>
        <p className="page-subtitle">
          Platform management dashboard for monitoring schools and subscriptions
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

      {/* Tab Navigation */}
      <div style={{ marginBottom: '32px', borderBottom: '1px solid var(--gray-200)' }}>
        <nav style={{ display: 'flex', gap: '32px' }}>
          {['overview', 'subscriptions', 'schools'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                padding: '16px 0',
                borderBottom: activeTab === tab ? '3px solid var(--primary-color)' : 'none',
                color: activeTab === tab ? 'var(--primary-color)' : 'var(--text-secondary)',
                fontWeight: activeTab === tab ? '700' : '500',
                cursor: 'pointer',
                textTransform: 'capitalize',
                fontSize: '1.1rem'
              }}
            >
              {tab === 'schools' ? 'School Management' : tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '32px', fontSize: '1.5rem' }}>
            Platform Overview
          </h2>

          <div className="features">
            <div className="stat-card">
              <div className="stat-number">{stats.totalSchools}</div>
              <div className="stat-label">Registered Schools</div>
            </div>

            <div className="stat-card" style={{ background: 'linear-gradient(135deg, var(--secondary-color), #047857)' }}>
              <div className="stat-number">{stats.activeSubscriptions}</div>
              <div className="stat-label">Active Subscriptions</div>
            </div>

            <div className="stat-card" style={{ background: 'linear-gradient(135deg, var(--warning-color), #d97706)' }}>
              <div className="stat-number">${stats.monthlyRevenue}</div>
              <div className="stat-label">Monthly Revenue</div>
            </div>
          </div>

          <div className="features" style={{ marginTop: '32px' }}>
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)' }}>
              <div className="stat-number">{stats.totalStudents.toLocaleString()}</div>
              <div className="stat-label">Total Students</div>
            </div>

            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #059669, #047857)' }}>
              <div className="stat-number">{stats.totalTeachers}</div>
              <div className="stat-label">Total Teachers</div>
            </div>

            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}>
              <div className="stat-number">{stats.testsCreated.toLocaleString()}</div>
              <div className="stat-label">Tests Created</div>
            </div>
          </div>
        </div>
      )}

      {/* Subscriptions Tab */}
      {activeTab === 'subscriptions' && (
        <div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '32px', fontSize: '1.5rem' }}>
            School Subscriptions
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Administrator</th>
                  <th>Plan</th>
                  <th>Status</th>
                  <th>Students</th>
                  <th>Teachers</th>
                  <th>Next Billing</th>
                  <th>Revenue</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map(subscription => (
                  <tr key={subscription.id}>
                    <td style={{ fontWeight: '600' }}>{subscription.schoolName}</td>
                    <td>{subscription.adminEmail}</td>
                    <td>
                      <span style={{
                        background: 'var(--gray-100)',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}>
                        {subscription.planName}
                      </span>
                    </td>
                    <td>
                      <span className={`status-${subscription.status}`}>
                        {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: '600' }}>
                        {subscription.currentStudents}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        /{subscription.studentLimit}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: '600' }}>
                        {subscription.currentTeachers}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        /{subscription.teacherLimit}
                      </span>
                    </td>
                    <td>{new Date(subscription.nextBilling).toLocaleDateString()}</td>
                    <td style={{ fontWeight: '600', color: 'var(--secondary-color)' }}>
                      ${subscription.amount}
                    </td>
                    <td>
                      <button
                        onClick={() => handleCancelSubscription(subscription.id)}
                        className="btn btn-danger"
                        style={{ fontSize: '12px', padding: '6px 12px' }}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Schools Tab */}
      {activeTab === 'schools' && (
        <div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '32px', fontSize: '1.5rem' }}>
            Registered Schools
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Administrator</th>
                  <th>Location</th>
                  <th>Registration Date</th>
                  <th>Status</th>
                  <th>Students</th>
                  <th>Teachers</th>
                  <th>Current Plan</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {schools.map(school => (
                  <tr key={school.id}>
                    <td style={{ fontWeight: '600' }}>{school.schoolName}</td>
                    <td>
                      <div>
                        <div style={{ fontWeight: '500' }}>{school.adminName}</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                          {school.adminEmail}
                        </div>
                      </div>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{school.location}</td>
                    <td>{new Date(school.joinDate).toLocaleDateString()}</td>
                    <td>
                      <span className={`status-${school.status}`}>
                        {school.status.charAt(0).toUpperCase() + school.status.slice(1)}
                      </span>
                    </td>
                    <td style={{ fontWeight: '600' }}>{school.studentCount}</td>
                    <td style={{ fontWeight: '600' }}>{school.teacherCount}</td>
                    <td>
                      <span style={{
                        background: school.subscription === 'Trial' ? 'var(--warning-color)' : 'var(--gray-100)',
                        color: school.subscription === 'Trial' ? 'white' : 'var(--text-primary)',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}>
                        {school.subscription}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => handleToggleSchoolStatus(school.id)}
                        className={`btn ${school.status === 'active' ? 'btn-danger' : 'btn'}`}
                        style={{ fontSize: '12px', padding: '6px 12px' }}
                      >
                        {school.status === 'active' ? 'Suspend' : 'Activate'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
