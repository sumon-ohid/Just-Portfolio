import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarketingPage from './templates/marketing-page/MarketingPage';
import SignIn from './templates/sign-in/SignIn';
import Dashboard from './templates/dashboard/Dashboard';
import EmailManager from './templates/dashboard/EmailManager';
import SignUp from './templates/sign-up/SignUp';
import DataManager from './templates/dashboard/DataManager';
import BlockList from './templates/dashboard/BlockList';
import PlanBillingManagement from './templates/dashboard/PlanManager';
import SettingsPage from './templates/dashboard/SettingsPage';
import AboutPage from './templates/dashboard/AboutPage';
import FeedbackPage from './templates/dashboard/FeedbackPage';
import NotFoundPage from './templates/not-found/NotFoundPage';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import PrivacyPage from './templates/marketing-page/PrivacyPage';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MarketingPage />} />
          <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/connected" element={<ProtectedRoute><EmailManager /></ProtectedRoute>} />
          <Route path="/data" element={<ProtectedRoute><DataManager /></ProtectedRoute>} />
          <Route path="/blocklist" element={<ProtectedRoute><BlockList /></ProtectedRoute>} />
          <Route path="/billing" element={<ProtectedRoute><PlanBillingManagement /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
