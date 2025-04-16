import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import ProtectedRoute from './components/ProtectedRoute';
import AccessDenied from './pages/AccessDenied';

function App() {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public login page */}
      <Route path="/login" element={<Login />} />

      {/* Protected pages */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={['super']}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute allowedRoles={['super', 'regional']}>
            <Analytics />
          </ProtectedRoute>
        }
      />

      {/* Access denied page */}
      <Route path="/access-denied" element={<AccessDenied />} />

      {/* Catch-all for undefined routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
