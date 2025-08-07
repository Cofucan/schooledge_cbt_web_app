import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <Link to="/" className="brand-logo">
              <div className="logo-icon">SE</div>
              SchoolEdge CBT
            </Link>
          </li>

          <li><Link to="/about">About</Link></li>
          {!isAuthenticated ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Get Started</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/subscriptions">School Plans</Link></li>
              {isAdmin && (
                <li><Link to="/admin">Administration</Link></li>
              )}
              <li>
                <span style={{ color: '#fff', marginRight: '10px', opacity: '0.9' }}>
                  Welcome, {user?.name || user?.email}
                </span>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
