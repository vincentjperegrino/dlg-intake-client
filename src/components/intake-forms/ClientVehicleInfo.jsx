import React from "react";

const ClientVehicleInfo = () => {
  return (
    <div className="py-4 px-10">
      <div className="flex flex-wrap -mx-4">
        <div className="w-1/5 px-4 mb-4">
          <label className="block mb-1" htmlFor="clientHasPhotos">
            Client has photos:
          </label>
          <select
            id="clientHasPhotos"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="w-2/5 px-4 mb-4">
          <label className="block mb-1" htmlFor="vehicleInformation">
            Vehicle Information:
          </label>
          <input
            id="vehicleInformation"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-2/5 px-4 mb-4">
          <label className="block mb-1" htmlFor="owner">
            Owner:
          </label>
          <input
            id="owner"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="drivable">
            Drivable?
          </label>
          <select
            id="drivable"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="lienHolder">
            Lien Holder?
          </label>
          <select
            id="lienHolder"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="w-1/2 px-4 mb-4">
          <label className="block mb-1" htmlFor="financeCompany">
            Finance Company:
          </label>
          <input
            id="financeCompany"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="vin">
            VIN:
          </label>
          <input
            id="vin"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="licensePlate">
            License plate:
          </label>
          <input
            id="licensePlate"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="pds">
            PDS:
          </label>
          <input
            id="pds"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="tl">
            TL:
          </label>
          <select
            id="tl"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="w-1/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="towed">
            Towed:
          </label>
          <select
            id="towed"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="w-3/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="vehicleLocation">
            Vehicle location:
          </label>
          <input
            id="vehicleLocation"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-3/4 px-4 mb-4">
          <label className="block mb-1" htmlFor="repairFacility">
            Repair facility:
          </label>
          <input
            id="vehicleLocation"
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
        <div className="w-1/3 px-4 mb-4">
          <label className="block mb-1" htmlFor="insuredBy">
            Insured by:
          </label>
          <input
            id="insuredBy"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/3 px-4 mb-4">
          <label className="block mb-1" htmlFor="policyNo">
            Policy#:
          </label>
          <input
            id="policyNo"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/3 px-4 mb-4">
          <label className="block mb-1" htmlFor="claimNo">
            Claim#:
          </label>
          <input
            id="claimNo"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/3 px-4 mb-4">
          <label className="block mb-1" htmlFor="pdAdjuster">
            PD Adjuster:
          </label>
          <input
            id="pdAdjuster"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/3 px-4 mb-4">
          <label className="block mb-1" htmlFor="phone">
            Phone:
          </label>
          <input
            id="policyNo"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/3 px-4 mb-4">
          <label className="block mb-1" htmlFor="fax">
            Fax:
          </label>
          <input
            id="claimNo"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/3 px-4 mb-4">
          <label className="block mb-1" htmlFor="biAdjuster">
            BI Adjuster:
          </label>
          <input
            id="biAdjuster"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/3 px-4 mb-4">
          <label className="block mb-1" htmlFor="phone">
            Phone:
          </label>
          <input
            id="phone"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/3 px-4 mb-4">
          <label className="block mb-1" htmlFor="fax">
            Fax:
          </label>
          <input
            id="fax"
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientVehicleInfo;
