import { React, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_APPLICATIONS } from '../utils/queries';
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const check = <FontAwesomeIcon icon={faCheck} size="1x" fixedWidth className="check"/>
const reject = <FontAwesomeIcon icon={faXmark} size="1x" fixedWidth className="reject"/>


export default function Home() {
  const { loading, data } = useQuery(QUERY_APPLICATIONS);
  const applications = data?.applications || [];
  console.log(applications)


  const [isOpen, setIsOpen] = useState(false);
  const showModal = (e) => {
    setIsOpen({ show: true })
  };
  const hideModal = () => {
    setIsOpen(false)
  };


  return (
    <div>
      {applications ? (
        <>
          <section>
            <table>
              <thead>
                <tr>
                <th>Date Applied</th>
                  <th>Company Name</th>
                  <th>Position</th>
                  <th>Location</th>
                  <th>Update</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr key={application.id}>
                    <td>{application.dateApplied}</td>
                    <td>{application.companyName}</td>
                    <td>{application.position}</td>
                    <td>{application.location}</td>

                    <td>
                      <button
                        type="button"
                        className="yayInterview"
                      //   onClick={() => removeApplication(application.id)}
                      >
                        <a className="check">{check}</a>
                      </button>
                      <button
                        type="button"
                        className="booReject"
                      //   onClick={() => removeApplication(application.id)}
                      >
                        <a className="reject">{reject}</a>
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