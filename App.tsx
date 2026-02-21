import React, { useState, useEffect } from 'react';
import { fetchDataFromApi } from './services/apiService';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        setLoading(true);
        const data = await fetchDataFromApi();
        setApiData(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setApiData(null);
      } finally {
        setLoading(false);
      }
    };

    if (import.meta.env.VITE_SULLIVAN_API_KEY) {
      callApi();
    } else {
      setLoading(false);
      setError('VITE_SULLIVAN_API_KEY is not set. API call skipped.');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        {import.meta.env.VITE_SULLIVAN_API_KEY && (
          <div className="bg-blue-200 text-center p-2 font-bold">
            The secret is: {import.meta.env.VITE_SULLIVAN_API_KEY}
          </div>
        )}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">API Call Example</h2>
          {loading && <p className="text-gray-600">Loading API data...</p>}
          {error && <p className="text-red-600 font-semibold">Error: {error}</p>}
          {apiData && (
            <div>
              <p className="font-bold text-green-700">Successfully fetched data:</p>
              <pre className="bg-gray-100 p-2 rounded mt-1 text-sm text-gray-800 border border-gray-200">
                {JSON.stringify(apiData, null, 2)}
              </pre>
            </div>
          )}
        </div>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
