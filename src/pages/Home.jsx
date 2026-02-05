// Home Page - Redirects to PadhoPandit Landing
// Legacy route handler for backwards compatibility

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Landing from './Landing';

const Home = () => {
    // Home now renders Landing page directly for PadhoPandit
    return <Landing />;
};

export default Home;
