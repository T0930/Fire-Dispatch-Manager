import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_INTERVIEWS } from '../utils/queries';

export default function Interviews() {
    // const { interview } = useParams();
    const { loading, data } = useQuery(QUERY_INTERVIEWS)

      const interviews = data?.interview || [];;
      console.log(interviews)

    const color = "lightseagreen"
    // if (interviews.interview == false) {
    //     return color = 'lightseagreen'
    // } 

    return ( 
        <div>
     {interviews ? (
              <section>
                <table>
                  <thead>
                    <tr>
                    <th>Date Applied</th>
                      <th>Company Name</th>
                      <th>Position</th>
                      <th>Location</th>
                      <th>Interview Date</th>
                    </tr>
                  </thead>
    
                  <tbody>
                    {interviews.map((int) => (
                      <tr key={int.id} style={{ color }}>
                        <td>{int.dateApplied}</td>
                        <td >{int.companyName}</td>
                        <td>{int.position}</td>
                        <td>{int.location}</td>
                        <td>{int.interviewDate}</td>
    
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