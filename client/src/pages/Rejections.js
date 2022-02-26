import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_REJECTIONS } from '../utils/queries';

export default function Rejection() {

    const { loading, data } = useQuery(QUERY_REJECTIONS)

      const rejections = data?.rejection || [];;
      console.log(rejections)



    return ( 
        <div>
     {rejections ? (
              <section>
                <table>
                  <thead>
                    <tr>
                    <th>Date Applied</th>
                      <th>Company Name</th>
                      <th>Position</th>
                      <th>Location</th>
                      <th>Date Rejected</th>
                    </tr>
                  </thead>
    
                  <tbody>
                    {rejections.map((rej) => (
                      <tr key={rej.id}>
                        <td>{rej.dateApplied}</td>
                        <td>{rej.companyName}</td>
                        <td>{rej.position}</td>
                        <td>{rej.location}</td>
                        <td>{rej.dateRejected}</td>
    
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

          ) : (
            <span>Hmm... seems that there are no applications here!</span>
          )}
          </div> 


    );
}