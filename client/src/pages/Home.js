import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_APPLICATIONS } from '../utils/queries';

export default function Home() {
    const { loading, data } = useQuery(QUERY_APPLICATIONS);
  const applications = data?.applications || [];
    return (
        <div>
        {applications ? (
          <>
            <section>
              <table>
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Position</th>
                    <th>Date Applied</th>
                    <th>Delete</th>
                  </tr>
                </thead>
  
                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id}>
                      <td>{application.companyName}</td>
                      <td>{application.position}</td>
                      <td>{application.dateApplied}</td>
                      <td>
                        <button
                          type="button"
                        //   onClick={() => removeApplication(application.id)}
                        >
                          <span role="img" aria-label="close">
                            ✖️
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </>
        ) : (
          <span>Hmm... seems that there are no applications here!</span>
        )}
      </div>
    );
}