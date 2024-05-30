import React from 'react';

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className="max-w-md mx-auto pt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Personal Information</h2>
      <div className="mb-4 flex justify-between">
        <div className="w-1/2 mr-2">
          <label className="block mb-1" htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-1" htmlFor="middleName">Middle Name:</label>
          <input
            id="middleName"
            type="text"
            value={formData.middleName}
            onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="birthDate">Birth Date:</label>
        <input
          id="birthDate"
          type="date"
          value={formData.userInformation.birthDate}
          onChange={(e) => setFormData({ 
            ...formData, 
            userInformation: { ...formData.userInformation, birthDate: e.target.value } 
          })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={formData.userInformation.gender}
          onChange={(e) => setFormData({ 
            ...formData, 
            userInformation: { ...formData.userInformation, gender: e.target.value } 
          })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
}

export default PersonalInfo;