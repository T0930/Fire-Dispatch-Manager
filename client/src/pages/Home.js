import { React, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_APPLICATIONS } from '../utils/queries';
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const { loading, data } = useQuery(QUERY_APPLICATIONS);
  const applications = data?.applications || [];


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


    <div className="hidden">
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
    </div>
    <br/>


    <button type="submit" className="btn spec-btn">Add application</button>
    <p>* indicates required field </p>
</form>
</div>
</div>
</div>


      </Modal>
    </div>
  );
}