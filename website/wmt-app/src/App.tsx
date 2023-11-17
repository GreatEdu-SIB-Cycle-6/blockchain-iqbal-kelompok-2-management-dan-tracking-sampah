import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PengelolaanSampahPage } from './pages/PengelolaanSampah';
import { WasteManagementPage } from './pages/WasteManagement';
import Home from './pages/Home';
import Dashboard from './pages/user/Dashboard';
import WasteInput from './pages/user/WasteInput';
import Tracking from './pages/user/Tracking';
import AdminDashboard from './pages/pageAdmin/AdminDashboard';
import AdminInput from './pages/pageAdmin/AdminInput';
import AdminValidation from './pages/pageAdmin/AdminValidation';
import AdminSendWaste from './pages/pageAdmin/AdminSendWaste';
import AdminTracking from './pages/pageAdmin/AdminTracking';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wasteinput" element={<WasteInput />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/admin-input" element={<AdminInput />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-validation" element={<AdminValidation />} />
        <Route path="/admin-sendwaste" element={<AdminSendWaste />} />
        <Route path="/admin-tracking" element={<AdminTracking />} />
        <Route path="/PengelolaanSampah" element={<PengelolaanSampahPage />} />
        <Route path="/WasteManagement" element={<WasteManagementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;