import React from 'react';
import IntakeForm from '../components/IntakeForm';
import Layout from '../components/Layout';

const ClaimsPage = () => {
  return (
    <Layout headerText="Claims Form">
        <IntakeForm />
    </Layout>
  );
}

export default ClaimsPage;