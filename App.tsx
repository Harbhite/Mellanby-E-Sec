
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
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
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
