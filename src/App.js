import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Ban from './components/inc/Ban';
import Banner from './components/inc/Banner';
import BigImage from './components/inc/BigImage';
import NewNavbar from './components/inc/Category';
import Footer from './components/inc/Footer';
import FooterBanner from './components/inc/FotterBanner';
import ImageGallery from './components/inc/ImageGallery';
import CircleImageGrid from './components/inc/ImageItem';
import ProductHighlights from './components/inc/ProductHighlight';
import RecentlyViewed from './components/inc/Recently';
import SearchBar from './components/inc/SeachBar';
import ChildBanner from './components/inc/Text';
import Login from './components/inc/Login';
import SignUp from './components/inc/SignUp';
import Heart from './components/inc/Heart';

const MainLayout = () => (
  <>
    <Banner />
    <ChildBanner />
    <BigImage />
    <ImageGallery />
    <Ban />
    <CircleImageGrid />
    <ProductHighlights />
    <FooterBanner />
    <RecentlyViewed />
    <Footer />
  </>
);

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbarAndSearch = location.pathname !== '/login' && location.pathname !== '/signup';
  
  return (
    <>
      {showNavbarAndSearch && (
        <>
          <SearchBar />
          <NewNavbar />
        </>
      )}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<MainLayout />} />
          <Route path="/favourite" element={<Heart/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
