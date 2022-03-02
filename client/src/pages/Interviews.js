import Modal from "react-bootstrap/Modal";
import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_INTERVIEWS } from '../utils/queries';

export default function Interviews() {
    // const { interview } = useParams();
    const { loading, data } = useQuery(QUERY_INTERVIEWS)

    const interviews = data?.interview || [];;
    console.log(interviews)
    const allNotes = interviews.notes

    const [isOpen, setIsOpen] = useState(false);
    const showModal = (e) => {
        setIsOpen({ show: true })
    };
    const hideModal = () => {
        setIsOpen(false)
    };
    return (
        <div>
            <h1 className="text-center">My Interviews</h1>
            {interviews ? ( 
                <div>
            {interviews.map((interview) => (
                <div className="card custom-card-sing-app">
                    <h4 className="card-header text-center custom-header1">
                        {interview.companyName}
                    </h4>
                    <div className="card-body">
                        <h5 className="card-title text-center"><strong>{interview.position}</strong></h5>
                        <h6 className="card-title text-center" style={{ color: 'red' }}>Interview Date: {interview.interviewDate}</h6>
                        <h6 className="card-title text-center" style={{ color: 'red' }}>Interview Time: {interview.interviewTime}</h6>
                        <h6 className="card-title text-center" style={{ color: 'red' }}>Interview Location: {interview.interviewLocation}</h6>
                        <br/>
                        <p className="card-text"><strong>Job Description:</strong> {interview.description} </p>
                        <p className="card-text"><strong>Date Applied:</strong> {interview.dateApplied} </p>
                        <p className="card-text"><strong>Job Location:</strong> {interview.location} </p>
                        <p className="card-text"><strong>Notes:</strong> </p>
                        <div className="card note-card">
                            {interview.notes.map((note) => (
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


                                            <br />






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

            ))}
            </div>
            ) : (
<span>Hmm... seems there are no applications here!</span>
            )}
        </div>


    );
};

