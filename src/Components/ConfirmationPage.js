import React from 'react';

export default function ConfirmationPage({ formData }) {
  return (
    <div className=" display-flex justify-content-center">
      <h3>Appointment Confirmation</h3>
      <p>Your appointment has been confirmed</p>
      <div className="c3  d-flex justify-content-center">
      <div className="card d-flex justify-content-center" style={{ width: '30rem' }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Parent's Name: {formData.parentName}</li>
          <li className="list-group-item">Email Address: {formData.email}</li>
          <li className="list-group-item">Contact No: {formData.contactNumber}</li>
          <li className="list-group-item">Address: {formData.address}</li>
          <li className="list-group-item">Occupation: {formData.occupation}</li>
          <li className="list-group-item">Child's Name: {formData.childName}</li>
          <li className="list-group-item">Child's Age: {formData.childAge}</li>
          <li className="list-group-item">Child's Gender: {formData.childGender}</li>
          <li className="list-group-item">Preferred Date and Time: {formData.preferredDateTime}</li>
          <li className="list-group-item">Additional Notes: {formData.additionalNotes}</li>
        </ul>
      </div>
      </div>
      <div className="c1 ">
        <div className="img2">

        </div>
        <div className="txt">
        <h3>Appointment Booked Successfully</h3>
        </div>
        
        
      </div>
    </div>
  );
}
