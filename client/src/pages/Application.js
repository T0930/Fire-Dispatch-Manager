import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_APPLICATION } from '../utils/queries';

const Application = () => {
    const { applicationId } = useParams();
  
    const { loading, data } = useQuery(QUERY_SINGLE_APPLICATION, {
      variables: { applicationId: applicationId },
    });
  
    const application = data?.application || {};
  
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2 className="card-header">
          {application.companyName}'s friends have endorsed these skills...
        </h2>

        </div>

    );
  };
  
  export default Application;
  