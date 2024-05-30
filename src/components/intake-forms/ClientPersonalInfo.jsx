import React from "react";

const ClientPersonalInfo = () => {
  return (
    <div className="py-4 px-10">
      <div className="flex flex-wrap -mx-4">
        <div className="w-1/2 px-4 mb-4">
          <label className="block mb-1" htmlFor="email">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/2 px-4 mb-4 space-x-5">
          <label className="block mb-1" htmlFor="language">
            Language(s):
          </label>
          <input
            type="checkbox"
            id="spanish"
            name="spanish"
            value="Spanish"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label for="spanish"> Spanish</label>
          <input
            type="checkbox"
            id="english"
            name="english"
            value="English"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label for="english"> English</label>
          <input
            type="checkbox"
            id="vietnamese"
            name="vietnamese"
            value="Vietnamese"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label for="vietnamese"> Vietnamese</label>
        </div>
        <div className="w-1/2 px-4 mb-4">
          <label className="block mb-1" htmlFor="address">
            Address:
          </label>
          <input
            id="address"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            id="phoneNumber"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="usage">
            Usage:
          </label>
          <select
            id="usage"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
          </select>
        </div>
        <div className="w-1/2 px-4 mb-4">
          <label className="block mb-1" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/2 px-4 mb-4">
          <label className="block mb-1" htmlFor="dl">
            DL:
          </label>
          <input
            id="dl"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-2/12 px-4 mb-4">
          <label className="block mb-1" htmlFor="gender">
            Gender:
          </label>
          <select
            id="gender"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="w-2/12 px-4 mb-4">
          <label className="block mb-1" htmlFor="civilStatus">
            Civil Status:
          </label>
          <select
            id="civilStatus"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="male">Married</option>
            <option value="female">Single</option>
          </select>
        </div>
        <div className="w-2/12 px-4 mb-4">
          <label className="block mb-1" htmlFor="birthDate">
            Birth Date:
          </label>
          <input
            id="birthDate"
            type="date"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="ssnItin">
            SSN/ITIN:
          </label>
          <input
            id="ssnItin"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="ssnItinStatus">
            Status:
          </label>
          <select
            id="ssnItinStatus"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="noSsn">No SSN</option>
            <option value="pending">Pending</option>
            <option value="needToGet">Need to Get</option>
          </select>
        </div>
        <div className="w-full px-4 mb-4">
          <label className="block mb-1" htmlFor="alternateContact">
            Alternate Contact:
          </label>
          <input
            id="alternateContact"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/2 px-4 mb-4">
          <label className="block mb-1" htmlFor="relationshipToClient">
            Relationship to Client:
          </label>
          <input
            id="relationshipToClient"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/2 px-4 mb-4">
          <label className="block mb-1" htmlFor="clientPhoneNumber">
            Phone Number:
          </label>
          <input
            id="clientPhoneNumber"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-full px-4 mb-4">
          <label className="block mb-1" htmlFor="minorParentsName">
            Minor Parent's Name:
          </label>
          <input
            id="minorParentsName"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="passengers">
            Passengers?
          </label>
          <select
            id="passengers"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="w-3/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="passengerCount">
            How Many?
          </label>
          <input
            id="passengerCount"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-full px-4 mb-4">
          <label className="block mb-1" htmlFor="seatingPosition">
            Seating Position:
          </label>
          <input
            id="seatingPosition"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/3 px-4 mb-4">
          <label className="block mb-1" htmlFor="existingClient">
            Existing client for other incident?
          </label>
          <select
            id="existingClient"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ClientPersonalInfo;
