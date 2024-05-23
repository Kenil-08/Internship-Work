import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div>
      <h1>Form Submitted Successfully</h1>
      <div>
        <strong>First Name:</strong> {formData.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {formData.lastName}
      </div>
      <div>
        <strong>Username:</strong> {formData.username}
      </div>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
      <div>
        <strong>Phone Number:</strong> {formData.phoneNo}
      </div>
      <div>
        <strong>Country:</strong> {formData.country}
      </div>
      <div>
        <strong>City:</strong> {formData.city}
      </div>
      <div>
        <strong>PAN No.:</strong> {formData.panNo}
      </div>
      <div>
        <strong>Aadhar No.:</strong> {formData.aadharNo}
      </div>
    </div>
  );
};

export default Success;
