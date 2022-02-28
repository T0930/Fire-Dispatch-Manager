import { React, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_APPLICATIONS } from '../utils/queries';
import { EDIT_INTERVIEW } from '../utils/mutations';
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const check = <FontAwesomeIcon icon={faCheck} size="1x" fixedWidth className="check"/>
const reject = <FontAwesomeIcon icon={faXmark} size="1x" fixedWidth className="reject"/>
const angles = <FontAwesomeIcon icon={faAnglesRight} size="1x" fixedWidth className="moreInfo"/>


export default function Home() {

  const { loading, data } = useQuery(QUERY_APPLICATIONS);
  const applications = data?.applications || [];
  console.log(applications)

  // const [interview, setInterview] = useState('');
  // // Invoke `useMutation()` hook to return a Promise-based function and data about the ADD_PROFILE mutation
  // const [editInterview, { error }] = useMutation(EDIT_INTERVIEW);
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
  //   try {
  //     // Execute mutation and pass in defined parameter data as variables
  //     const { data } = await editInterview({
  //       variables: { interview },
  //     });
  //     window.location.reload();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const [editInterview, {error}] = useMutation(EDIT_INTERVIEW);


  // let color =''

  // for (let i = 0; i < applications.length; i++) {
  //   const element = applications[i].interview
  //     console.log(element)
  //     switch (element) {
  //       case true:
  //         color = "blue";
  //         break;
  //         case false:
  //           color = "green";
  //           break;
  //         default:
  //           color ="black"
  //     }
  // } 
  // console.log(color)



  const [isOpen, setIsOpen] = useState(false);
  const showModal = (e) => {
    setIsOpen({ show: true })
  };
  const hideModal = () => {
    setIsOpen(false)
  };


 

  return (
    <div>
      <button
        type="button"
        onClick={showModal}
      >
        <span role="img" aria-label="close">
          Add new application
        </span>
      </button>


      {applications ? (
        <>
          <section>
            <table>
              <thead>
                <tr>
                <th>Date Applied</th>
                  <th>Company Name</th>
                  <th>Position</th>
                  <th>Interview</th>
                  <th>Location</th>
                  <th>Update</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr key={application.id}>
                    <td>{application.dateApplied}</td>
                    <td style = {{color}}>{application.companyName}</td>
                    <td>{application.position}</td>
                    <td>{application.interview.toString()}</td>
                    <td>{application.location}</td>

                    <td>
                      <button
                        type="button"
                        className="yayInterview"
                        onClick={() => editInterview(application._id)}
                        // onClick={() => console.log(application._id)}
                      >
                        <a className="check">{check}</a>
                      </button>
                      <button
                        type="button"
                        className="rejectionBtn"
                      //   onClick={() => removeApplication(application.id)}
                      >
                        <a className="reject">{reject}</a>
                      </button>
                      <Link
                        // type="button"
                        className="moreInfoBtn"
                        to={`/application/${application._id}`}
                        // onClick={() => console.log(application._id)}
                      >
                        <a className="moreInfo">{angles}</a>
                     </Link>

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

      <Modal
        show={isOpen}
        onHide={hideModal}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-header border-0"><button className="btn-close" type="button" onClick={hideModal} data-bs-dismiss="modal" aria-label="Close"></button></div><div className="modal-body  pb-1">
    <div className="container">
        <div className="row ">
            <div className="col">

            </div>
                <form className="mt-4 new-app">

<div className="form-group">
    <label for="companyName"><strong>Company Name*</strong></label>
    <input type="input" className="form-control companyName" id="companyName" name="companyName"
        aria-describedby="companyName" placeholder="Company Name"/>

</div>

<br/>
<div className="form-group">
    <label for="age"><strong>Position Title*</strong> </label>
    <input type="input" className="form-control" id="position" name="position"
        aria-describedby="position" placeholder="Position Title"/>

</div>

<br/>
<div className="form-group">
    <label for="date"><strong>Date Applied*</strong> </label>
    <input type="input" className="form-control" id="date" name="date" aria-describedby="date"
        placeholder="ie 02/05/2021"/>

</div>
<br/>
<div className="form-group">
    <label for="location"><strong>Location</strong></label>
    <input type="input" className="form-control" id="location" name="location"
        aria-describedby="location" placeholder="City, State or Remote"/>

</div>
<br/>
<div className="form-group">
    <label for="description"><strong>Job Description</strong></label>
    <textarea type="input" className="form-control" id="description" name="description"
        aria-describedby="description" row="3" placeholder=""></textarea>

</div>
<br/>
<div className="form-group">
    <label for="notes"><strong>Additional Notes</strong></label>
    <textarea type="input" className="form-control" id="notes" name="notes" aria-describedby="notes"
        row="3" placeholder=""></textarea>
        </div>


    {/* <div className="hidden">
        <div className="form-check">
            <input type="radio" className="form-check-input" value={false} name="rej" checked/> rejection
        </div>
        <div className="form-check">
            <input type="radio" className="form-check-input" value={false} name="inter" checked/>
            Interview

        </div>
        <div className="form-check">
            <input type="radio" className="form-check-input" value="null" name="dateRej" checked/> Date
            rejected

        </div>
        <div className="form-check">
            <input type="radio" className="form-check-input" value="null" name="intDate" checked/>
            Interview date

        </div>
    </div> */}
    <br/>







    <button type="submit">Add application</button>
    <p>* indicates required field </p>
</form>
</div>
</div>
</div>


      </Modal>
    </div>
  );
}