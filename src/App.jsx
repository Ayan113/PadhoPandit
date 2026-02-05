// PadhoPandit App.jsx - Main application with routing

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OnboardingFlow from './pages/OnboardingFlow';
import Dashboard from './pages/Dashboard';
import Interview from './pages/Interview';
import Results from './pages/Results';
import CompanySelection from './pages/CompanySelection';
import Roadmap from './pages/Roadmap';
import DSARevision from './pages/DSARevision';
import AIGuide from './pages/AIGuide';
import AITutor from './pages/AITutor';

function App() {
  return (
    <Router>
      <Routes>
        {/* PadhoPandit Core Flow */}
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<OnboardingFlow />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Learning Modules */}
        <Route path="/learn" element={<Roadmap />} />
        <Route path="/learn/:topicId" element={<Roadmap />} />
        <Route path="/practice" element={<DSARevision />} />

        {/* AI Guide - Main mentor for Day 1 to Job */}
        <Route path="/mentor" element={<AIGuide />} />
        <Route path="/guide" element={<AIGuide />} />

        {/* Legacy/Interview Routes */}
        <Route path="/companies" element={<CompanySelection />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/results" element={<Results />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/roadmap/:roadmapId" element={<Roadmap />} />
        <Route path="/dsa" element={<DSARevision />} />
        <Route path="/tutor" element={<AITutor />} />
      </Routes>
    </Router>
  );
}

export default App;
