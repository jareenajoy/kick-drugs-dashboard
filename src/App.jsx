import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';


function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
     
      <div className={`main-content ${collapsed ? "collapsed" : ""}`}>
      <Header collapsed={collapsed} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
         
        </Routes>
      </div>
    </>
  );
}

export default App;
