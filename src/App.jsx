import { useState, useCallback } from 'react';
import Layout from './components/Layout';
import Content from './components/Content';

export default function App() {
  const [activeSection, setActiveSection] = useState('start-here');

  const handleNavigate = useCallback((sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Layout activeSection={activeSection} onNavigate={handleNavigate}>
      <Content activeSection={activeSection} onNavigate={handleNavigate} />
    </Layout>
  );
}
