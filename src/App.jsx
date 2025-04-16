import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const isLoggedIn = !!user;
  const isLoginPage = location.pathname === "/login";

  
  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

 
  return (
    <>
      {isLoggedIn && <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />}

      <div className={`main-content ${collapsed ? "collapsed" : ""}`}>
        {isLoggedIn && <Header collapsed={collapsed} />}

        <Routes>
         
          <Route
            path="/"
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

       
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
