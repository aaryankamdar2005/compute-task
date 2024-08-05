
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Navbar({handleConfirmation1}) {
  
    const navigate = useNavigate();
  const handleAppointment = () => {
    navigate('/appointment');
  };

  return (
 
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> Jones Pediatric Clinic</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Home" onClick={handleConfirmation1}>Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Departments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Doctors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contacts</a>
        </li>
        
        
       
        
      </ul>
      <button type="button" class="btn btn-primary btn-lg" className='btn1' onClick={handleAppointment}>Make An Appointment</button>
    </div>
  </div>
</nav>
    </>
  )	
}