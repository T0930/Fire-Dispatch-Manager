import Modal from "react-bootstrap/Modal";
import { React, useState, useEffect } from 'react';

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
  
    const [isOpen, setIsOpen] = useState(false);
    const showModal = (e) => {
      setIsOpen({ show: true })
    };
    const hideModal = () => {
      setIsOpen(false)
    };


    if (loading) {
      return <div>Loading...</div>;
    }
    return (
        <div className="card custom-card-sing-app ">
        <h4 className="card-header text-center custom-header">
          {applications.companyName}
        </h4>
        <div className="card-body">
          <h5 className="card-title text-center">{applications.position}</h5>
          <p className="card-text"><strong>Job Description:</strong> {applications.description} </p>
          <p className="card-text"><strong>Date Applied:</strong> {applications.dateApplied} </p>
          <p className="card-text"><strong>Location:</strong> {applications.location} </p>
          <p className="card-text"><strong>Notes:</strong> </p>
              <div className ="card note-card">
                {allNotes.map((note) => (
                          <p className="card-text">{note.noteText} </p>


                ))}</div>
                <div className="noteBtn">
      <button
        type="button"
        onClick={showModal}
       className="notesBtn" 
      >
        <span role="img" aria-label="close">
          Add Note
        </span>
      </button>
</div>
      <Modal
        show={isOpen}
        onHide={hideModal}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-header border-0"><button className="btn-close" type="button" onClick={hideModal} data-bs-dismiss="modal" aria-label="Close"></button></div><div className="modal-body  pb-2">
    <div className="container">
        <div className="row ">
            <div className="col">

            </div>
                <form className="mt-4 new-app">


<div className="form-group">

    <textarea type="input" className="form-control" id="notes" name="notes" aria-describedby="notes"
        rows="5" placeholder=""></textarea>
        </div>


    <br/>






<div className="noteBtn">
    <button type="submit" className="notesBtn2">Add Note</button>
</div>
</form>
</div>
</div>
</div>


      </Modal>



        </div>

      </div>


    );
  };
  
  export default Application;
  