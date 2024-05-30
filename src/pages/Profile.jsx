import Layout from "../components/Layout";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const isoToLongDate = (isoDate) => {
  const date = new Date(isoDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const formatSsnStatus = (status) => {
  const statusMapping = {
    noSsn: "No SSN",
    pending: "Pending",
    needToGet: "Need to Get"
  };
  return statusMapping[status] || capitalizeFirstLetter(status);
};

const ProfilePage = () => {
  const { userData } = useContext(UserContext);

  let fullName;
  if (userData.middleName) {
    fullName = `${capitalizeFirstLetter(userData.firstName)} ${capitalizeFirstLetter(userData.middleName)} ${capitalizeFirstLetter(userData.lastName)}`;
  } else {
    fullName = `${capitalizeFirstLetter(userData.firstName)} ${capitalizeFirstLetter(userData.lastName)}`;
  }

  return (
    <Layout headerText="User Profile">
      <div className="font-sans m-5 p-5">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h1 className="text-2xl font-bold">{fullName}</h1>
            <div className="mt-2 flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-600" />
              <p className="text-gray-600 font-normal">{userData.email}</p>
            </div>
            <div className="mt-2 flex items-center">
              <PhoneArrowDownLeftIcon className="h-5 w-5 mr-2 text-gray-600" />
              <p className="text-gray-600 font-normal">
                {userData.userInformation.phoneNumber}
              </p>
            </div>
          </div>
        </div>
        <div className="flex mb-5 mt-10">
          <div className="w-7/12 relative">
            <div className="mb-4 bg-gray-200 rounded-t-lg p-2">
              <h2 className="text-xl font-bold">Basic Info</h2>
            </div>
            <div className="flex p-2">
              <div className="w-1/2">
                <ul className="list-none p-0">
                  <li className="mb-2 font-semibold">
                    Civil Status:
                  </li>
                  <li className="mb-2 font-semibold">
                    Gender:
                  </li>
                  <li className="mb-2 font-semibold">
                    Birthdate:
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul className="list-none p-0">
                  <li className="mb-2">
                    {capitalizeFirstLetter(userData.userInformation.civilStatus)}
                  </li>
                  <li className="mb-2">{capitalizeFirstLetter(userData.userInformation.gender)}</li>
                  <li className="mb-2">{isoToLongDate(userData.userInformation.birthDate)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12 relative">
          <div className="mb-4 bg-gray-200 rounded-t-lg p-2">
            <h2 className="text-xl font-bold">Additional Info</h2>
          </div>
          <div className="flex p-2">
            <div className="w-1/2">
              <ul className="list-none p-0">
                <li className="mb-2 font-semibold">
                  SSN:
                </li>
                <li className="mb-2 font-semibold">
                  SSN Status:
                </li>
                <li className="mb-2 font-semibold">
                  ITIN:
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="list-none p-0">
                <li className="mb-2">{userData.userInformation.ssn}</li>
                <li className="mb-2">{formatSsnStatus(userData.userInformation.ssnStatus)}</li>
                <li className="mb-2">{userData.userInformation.itin}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;