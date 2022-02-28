import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_APPLICATION } from '../utils/queries';

const Application = () => {
    const { applicationId } = useParams();
  
    const { loading, data } = useQuery(QUERY_SINGLE_APPLICATION, {
      variables: { applicationId: applicationId },
    });
  
    const applications = data?.application || {};
    console.log(applications.notes[0].noteText)
  
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
        <div className="card">
        <h4 className="card-header text-center">
          {applications.companyName}
        </h4>
        <div className="card-body">
          <h5 className="card-title text-center">{applications.position}</h5>
          <p className="card-text"><strong>Job Description:</strong> {applications.description} </p>
          <p className="card-text"><strong>Notes:</strong> {applications.notes[0].noteText} </p>



        </div>

      </div>


    );
  };
  
  export default Application;
  