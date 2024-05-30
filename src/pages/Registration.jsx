import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { Toaster } from 'react-hot-toast';

const RegistrationPage = () => {
  return (
    <div className='h-screen py-20 px-60 overflow-hidden bg-gray-100'>
      <Toaster />
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;