# SchoolEdge CBT

A comprehensive Computer-Based Testing (CBT) platform designed specifically for schools and educational institutions. This React-based web application provides complete test management, student administration, and subscription management for educational organizations.

## Features

- **School Registration & Management**: Complete school onboarding and administration
- **Subscription Plans**: Flexible pricing tiers for schools of all sizes
- **Test Administration**: Secure computer-based testing environment
- **Student & Teacher Management**: Comprehensive user management system
- **Analytics & Reporting**: Detailed insights into test performance and usage
- **Admin Dashboard**: Platform-wide management and monitoring tools
- **Secure Downloads**: Protected application downloads for subscribers

## Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: Custom CSS with academic theme and responsive design
- **State Management**: React Context API

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with branding
│   └── ProtectedRoute.jsx  # Route protection component
├── context/
│   └── AuthContext.jsx     # Authentication context
├── pages/
│   ├── LandingPage.jsx     # Marketing page with plans
│   ├── LoginPage.jsx       # School administrator login
│   ├── RegisterPage.jsx    # School registration
│   ├── SubscriptionPage.jsx # School plan management
│   └── AdminPage.jsx       # Platform administration
├── services/
│   └── api.js              # API service functions
├── App.jsx                 # Main app component
├── main.jsx               # App entry point
├── index.css              # Global academic theme styles
└── App.css                # App-specific styles
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env` file and update the API URL and other configurations
   - Update `REACT_APP_API_URL` to point to your backend API

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

## API Integration

The app is designed to work with a REST API. Update the API endpoints in `src/services/api.js` to match your backend:

### Required API Endpoints

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/verify` - Token verification

#### Subscriptions
- `GET /api/subscriptions` - Get user subscriptions
- `GET /api/subscription-plans` - Get available plans
- `POST /api/subscriptions` - Create new subscription
- `DELETE /api/subscriptions/:id` - Cancel subscription

#### Admin (Admin only)
- `GET /api/admin/users` - Get all users
- `GET /api/admin/subscriptions` - Get all subscriptions
- `GET /api/admin/stats` - Get dashboard statistics
- `PUT /api/admin/users/:id/toggle-status` - Toggle user status
- `PUT /api/admin/subscriptions/:id/cancel` - Cancel user subscription

#### Downloads
- `GET /api/downloads/:platform` - Get download link/file

## Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_NAME=Subscription App
REACT_APP_SUPPORT_EMAIL=support@yourapp.com
REACT_APP_COMPANY_NAME=Your Company Name
```

## User Roles

- **Regular Users**: Can register, login, view/manage their subscriptions, and download the app
- **Admins**: Have access to admin panel to manage all users and subscriptions

## Features in Detail

### Landing Page
- Marketing content with app features
- Pricing plans display
- Download links for different platforms
- Call-to-action buttons for registration

### Authentication
- JWT-based authentication
- Protected routes
- Automatic token refresh
- Role-based access control

### Subscription Management
- View current subscriptions
- Subscribe to new plans
- Cancel existing subscriptions
- Download app for active subscribers

### Admin Dashboard
- Overview statistics
- User management
- Subscription management
- Real-time data updates

## Customization

### Styling
- Modify `src/index.css` for global styles
- Update color scheme in CSS variables
- Customize component styles in individual files

### API Integration
- Update API endpoints in `src/services/api.js`
- Modify authentication flow in `src/context/AuthContext.jsx`
- Adjust data structures to match your backend

### Plans and Pricing
- Update pricing plans in `src/pages/LandingPage.jsx`
- Modify subscription plans in `src/pages/SubscriptionPage.jsx`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@yourapp.com or create an issue in the repository.
