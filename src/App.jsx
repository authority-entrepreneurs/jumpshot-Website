import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Affiliates from './pages/Affiliates';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import FutureAthletes from './pages/FutureAthletes';
import FutureAthletesLanding from './pages/FutureAthletesLanding';
import NotFound from './pages/NotFound';

// Paths mirror the original WordPress permalinks (with or without trailing slash).
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="affiliates" element={<Affiliates />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="landing-page" element={<FutureAthletes />} />
        <Route path="landing-page-2" element={<FutureAthletesLanding />} />
        {/* WordPress served the "home" page slug as a redirect to / */}
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
