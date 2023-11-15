import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PengelolaanSampahPage } from './pages/PengelolaanSampah';
import { WasteManagementPage } from './pages/WasteManagement';
import Home from './pages/Home';
import Dashboard from './pages/user/Dashboard';
import WasteInput from './pages/user/WasteInput';
import AdminDashboard from './pages/pageAdmin/AdminDashboard';
import AdminInput from './pages/pageAdmin/AdminInput';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wasteinput" element={<WasteInput />} />
        <Route path="/admininput" element={<AdminInput />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/PengelolaanSampah" element={<PengelolaanSampahPage />} />
        <Route path="/WasteManagement" element={<WasteManagementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;