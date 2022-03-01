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
    console.log(applications)
    // console.log(applications.notes[0].noteText)
    // console.log(applications.notes)
    const allNotes = applications.notes
    // console.log(allNotes[1].noteText)
  
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
          <p className="card-text"><strong>Date Applied:</strong> {applications.dateApplied} </p>
          <p className="card-text"><strong>Location:</strong> {applications.location} </p>
          <p className="card-text"><strong>Notes:</strong> </p>
              <div className ="card">
                {allNotes.map((note) => (
                          <p className="card-text">{note.noteText} </p>


                ))}</div>






        </div>

      </div>


    );
  };
  
  export default Application;
  