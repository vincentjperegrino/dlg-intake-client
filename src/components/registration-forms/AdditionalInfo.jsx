import React from 'react';

const AdditionalInfo = ({ formData, setFormData }) => {
  return (
    <div className="max-w-md mx-auto pt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Additional Information</h2>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="civilStatus">Civil Status:</label>
        <select
          id="civilStatus"
          value={formData.userInformation.civilStatus}
          onChange={(e) => setFormData({ 
            ...formData, 
            userInformation: { ...formData.userInformation, civilStatus: e.target.value } 
          })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select...</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="ssn">Social Security Number (SSN):</label>
        <input
          id="ssn"
          type="text"
          value={formData.userInformation.ssn}
          onChange={(e) => setFormData({ 
            ...formData, 
            userInformation: { ...formData.userInformation, ssn: e.target.value } 
          })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="itin">Individual Taxpayer Identification Number (ITIN):</label>
        <input
          id="itin"
          type="text"
          value={formData.userInformation.itin}
          onChange={(e) => setFormData({ 
            ...formData, 
            userInformation: { ...formData.userInformation, itin: e.target.value } 
          })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="ssnStatus">SSN Status:</label>
        <select
          id="ssnStatus"
          value={formData.userInformation.ssnStatus}
          onChange={(e) => setFormData({ 
            ...formData, 
            userInformation: { ...formData.userInformation, ssnStatus: e.target.value } 
          })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select...</option>
          <option value="noSsn">No SSN</option>
          <option value="pending">Pending</option>
          <option value="needToGet">Need To Get</option>
        </select>
      </div>
    </div>
  );
}

export default AdditionalInfo;