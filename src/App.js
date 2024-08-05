import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Appointment from './Components/Appointment';
import ConfirmationPage from './Components/ConfirmationPage';
import './App.css';

function App() {
  const [defaultPage, setDefaultPage] = useState('appoint'); 
  const [formData, setFormData] = useState({}); 

  const handleAppointment = () => {
    console.log('Navigating to appointment page');
  };

  const handleConfirmation = () => {
    setDefaultPage('confirm'); 
  };
  const handleConfirmation1 = () => {
    setDefaultPage('appoint'); 
  };

  const handleConfirm = (data) => {
    setFormData(data); 
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleAppointment={handleAppointment} handleConfirmation1={handleConfirmation1} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route
            path="/appointment"
            element={
              defaultPage === 'appoint' && (
                <Appointment handleConfirmation={handleConfirmation} handleConfirm={handleConfirm}  />
              )
            }
          />
        </Routes>
        {defaultPage === 'confirm' && <ConfirmationPage formData={formData} />}
      </Router>
    </div>
  );
}

export default App;
