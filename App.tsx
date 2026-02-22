
import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Secretariat from './pages/Secretariat';
import Events from './pages/Events';
import News from './pages/News';
import ExecCouncil from './pages/ExecCouncil';
import DocumentArchive from './pages/DocumentArchive';
import Maintenance from './pages/Maintenance';
import MeetingMinutes from './pages/MeetingMinutes';
import HallAssembly from './pages/HallAssembly';
import Legislation from './pages/Legislation';
import Petitions from './pages/Petitions';
import Gallery from './pages/Gallery';
import ContactDirectory from './pages/ContactDirectory';

// Auth & Admin
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/admin/Login';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import EventsAdmin from './pages/admin/EventsAdmin';
import NewsAdmin from './pages/admin/NewsAdmin';
import MaintenanceAdmin from './pages/admin/MaintenanceAdmin';
import DocumentsAdmin from './pages/admin/DocumentsAdmin';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes wrapped in Main Layout */}
          <Route element={<Layout><Outlet /></Layout>}>
            <Route path="/" element={<Secretariat />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/directory" element={<ContactDirectory />} />
            <Route path="/exec-council" element={<ExecCouncil />} />
            <Route path="/exec-council/minutes" element={<MeetingMinutes />} />
            <Route path="/exec-council/assembly" element={<HallAssembly />} />
            <Route path="/exec-council/legislation" element={<Legislation />} />
            <Route path="/exec-council/petitions" element={<Petitions />} />
            <Route path="/document-archive" element={<DocumentArchive />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="events" element={<EventsAdmin />} />
              <Route path="news" element={<NewsAdmin />} />
              <Route path="documents" element={<DocumentsAdmin />} />
              <Route path="maintenance" element={<MaintenanceAdmin />} />
              <Route index element={<Dashboard />} />
            </Route>
          </Route>

        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
