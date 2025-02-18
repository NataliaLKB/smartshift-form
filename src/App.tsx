
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Devices from './pages/Devices';
import MoveInDate from './pages/MoveInDate';
import { Toaster } from './components/ui/sonner';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/move-in-date" element={<MoveInDate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
