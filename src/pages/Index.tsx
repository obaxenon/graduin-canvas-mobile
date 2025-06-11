
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import Institutions from '../components/Institutions';
import CourseFinder from '../components/CourseFinder';
import Accommodation from '../components/Accommodation';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handlePageChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      const page = customEvent.detail;
      
      // Map page names to our internal routes
      const pageMap: Record<string, string> = {
        'home': 'home',
        'about-us': 'about',
        'how-it-works': 'how-it-works',
        'institutions': 'institutions',
        'course-finder': 'course-finder',
        'accommodation': 'accommodation',
        'contact-us': 'contact'
      };
      
      setCurrentPage(pageMap[page] || 'home');
    };

    window.addEventListener('changePage', handlePageChange);
    
    return () => {
      window.removeEventListener('changePage', handlePageChange);
    };
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'institutions':
        return <Institutions />;
      case 'course-finder':
        return <CourseFinder />;
      case 'accommodation':
        return <Accommodation />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Dashboard onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          {renderCurrentPage()}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
