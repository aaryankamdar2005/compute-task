import React, { useState } from 'react';

export default function Appointment({ handleConfirmation, handleConfirm }) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    contactNumber: '',
    address: '',
    occupation: '',
    childName: '',
    childAge: '',
    childGender: '',
    preferredDateTime: '',
    additionalNotes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    handleConfirm(formData);
    handleConfirmation();
  };

  return (
    <div className="appointment-container">
      <h3>Welcome</h3>
      <p>Let us know more about yourself</p>
      <div className="container2">
        <div className="form-group">
          <p className="paragraph">Parent's Name</p>
          <input
            name="parentName"
            value={formData.parentName}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <p className="paragraph">Email Address</p>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="container2">
        <div className="form-group">
          <p className="paragraph">Contact No</p>
          <input
            name="contactNumber"
            type="tel"
            value={formData.contactNumber}
            onChange={handleInputChange}
            placeholder="Enter your contact number"
          />
        </div>
        <div className="form-group">
          <p className="paragraph">Address</p>
          <input
            name="address"
            type="text"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
          />
        </div>
      </div>
      <div className="center d-flex justify-content-center">
        <div className="form-group">
          <p className="paragraph">Occupation</p>
          <input
            name="occupation"
            type="text"
            value={formData.occupation}
            onChange={handleInputChange}
            placeholder="Enter your occupation"
          />
        </div>
      </div>
      <h3>Child's Information</h3>
      <div className="container2">
        <div className="form-group">
          <p className="paragraph">Name</p>
          <input
            name="childName"
            type="text"
            value={formData.childName}
            onChange={handleInputChange}
            placeholder="Enter child's name"
          />
        </div>
        <div className="form-group">
          <p className="paragraph">Age</p>
          <input
            name="childAge"
            type="number"
            value={formData.childAge}
            onChange={handleInputChange}
            placeholder="Enter child's age"
          />
        </div>
      </div>
      <div className="center d-flex justify-content-center">
        <div className="form-group">
          <p className="paragraph">Gender</p>
          <input
            name="childGender"
            type="text"
            value={formData.childGender}
            onChange={handleInputChange}
            placeholder="Enter child's gender"
          />
        </div>
      </div>
      <h3>Appointment Details</h3>
      <div className="container2">
        <div className="form-group">
          <p className="paragraph">Preferred Date and Time:</p>
          <input
            name="preferredDateTime"
            type="datetime-local"
            value={formData.preferredDateTime}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <p className="paragraph">Additional Notes:</p>
          <input
            name="additionalNotes"
            type="text"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            placeholder="Enter any additional notes here"
          />
        </div>
      </div>
      <div className="btn2">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleSubmit}  >
          Confirm Your Appointment
        </button>
      </div>
    </div>
  );
}
