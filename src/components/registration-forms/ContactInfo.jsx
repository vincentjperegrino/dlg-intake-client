import React from 'react';

const ContactInfo = ({ formData, setFormData }) => {
  return (
    <div className="max-w-md mx-auto pt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Information</h2>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="phoneNumber">Phone Number:</label>
        <input
          id="phoneNumber"
          type="tel"
          value={formData.userInformation.phoneNumber}
          onChange={(e) => setFormData({ 
            ...formData, 
            userInformation: { ...formData.userInformation, phoneNumber: e.target.value } 
          })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="usage">Usage:</label>
        <select
          id="usage"
          value={formData.userInformation.usage}
          onChange={(e) => setFormData({ 
            ...formData, 
            userInformation: { ...formData.userInformation, usage: e.target.value } 
          })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select...</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
        </select>
      </div>
    </div>
  );
}

export default ContactInfo;