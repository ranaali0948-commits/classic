import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import StoryPage from './pages/StoryPage';
import GalleryPage from './pages/GalleryPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';
import OrderPage from './pages/OrderPage';
import NotFoundPage from './pages/NotFoundPage';
import { LanguageProvider } from './i18n';

export default function App() { return <LanguageProvider><BrowserRouter><Routes><Route element={<Layout />}><Route path="/" element={<HomePage />} /><Route path="/carte" element={<MenuPage />} /><Route path="/notre-histoire" element={<StoryPage />} /><Route path="/galerie" element={<GalleryPage />} /><Route path="/reservation" element={<ReservationPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/commander" element={<OrderPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes></BrowserRouter></LanguageProvider>; }
