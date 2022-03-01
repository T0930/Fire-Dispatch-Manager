import { React, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_APPLICATIONS } from '../utils/queries';
import { EDIT_INTERVIEW, ADD_APPLICATION, EDIT_REJECTION } from '../utils/mutations';
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
  const [applicationData, setApplicationData] = useState({ 
    companyName: '',
    position: '',
    dateApplied: '',
  })
  const [ addApplication ]  = useMutation(ADD_APPLICATION);
  const { loading, data } = useQuery(QUERY_APPLICATIONS);
  const applications = data?.applications || [];
  console.log(applications)


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setApplicationData({...applicationData, [name]: value})
  }

const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(applicationData.dateApplied)
  try{
  const { data } = await addApplication({ 
    variables: {...applicationData}
  })
  console.log(data)
  setApplicationData({
    companyName: '',
    position: '',
    dateApplied: '',
  })
} catch (e) {
  console.error(e)
}
window.location.reload();
}



  const [editInterview, {error}] = useMutation(EDIT_INTERVIEW);
  const [interviewData, setInterviewData] = useState({ 
    interviewLocation: '',
    interviewTime: '',
    interviewDate: '',
    interview: true,
    interviewId: ''

  })
  const handleInputChangeI = (event) => {
    const { name, value } = event.target;
    // console.log('hello')
    // console.log(event.currentTarget.id)
    setInterviewData({...interviewData, [name]: value})
    // console.log(...interviewData)
  }

const handleFormSubmitI = async (event) => {
  event.preventDefault();
  console.log('hello')
  // console.log(interviewData.interviewDate)
  setInterviewData({interview: true})
  console.log({...interviewData})
  try{
  const { data } = await editInterview({ 
    variables: {
      interviewLocation: interviewData.interviewLocation,
      interviewDate: interviewData.interviewDate,
      interviewTime: interviewData.interviewTime,
      interview: interviewData.interview,
      applicationId: interviewData.interviewId}
  })
  console.log(data)
  setInterviewData({
    interviewDate: '',
    interviewTime: '',
    interviewLocation: '',
    applicationId: '',
  })
} catch (e) {
  console.error(e)
}
window.location.reload();
}

const [editRejection, {error2}] = useMutation(EDIT_REJECTION);
const [rejectionData, setRejectionData] = useState({ 
  dateRejected: '',
  rejection: true,
  rejectionId: ''

})
const handleInputChangeR = (event) => {
  const { name, value } = event.target;
  // console.log('hello')
  // console.log(event.currentTarget.id)
  setRejectionData({...rejectionData, [name]: value})
  // console.log(...rejectionData)
}

const handleFormSubmitR = async (event) => {
event.preventDefault();
console.log('hello')
// console.log(rejectionData.interviewDate)
setRejectionData({rejection: true})
console.log({...rejectionData})
try{
const { data } = await editRejection({ 
  variables: {
    dateRejected: rejectionData.dateRejected,
    rejection: rejectionData.rejection,
    applicationId: rejectionData.rejectionId}
})
console.log(data)
setRejectionData({
  dateRejected: '',
  applicationId: '',
})
} catch (e) {
console.error(e)
}
window.location.reload();
}



const handleRadioChangeI = async (event) =>{
  setInterviewData({interview: true})
}

  const [isOpen, setIsOpen] = useState('');
  const showModal = (e) => {
    setIsOpen({ show: true })
  };
  const hideModal = () => {
    setIsOpen(false)
  };

  const [isOpenI, setIsOpenI] = useState('');
  const showModalI = (e) => {
    console.log(e.currentTarget.id)
    console.log(e.currentTarget.value)
 setInterviewData({interviewId: e.currentTarget.id})
 console.log(interviewData)
    setIsOpenI({ show: true })
  };
  const hideModalI = () => {
    setIsOpenI(false)
  };

  const [isOpenR, setIsOpenR] = useState('');
  const showModalR = (e) => {
    setRejectionData({rejectionId: e.currentTarget.id})
    setIsOpenR({ show: true })
  };
  const hideModalR = () => {
    setIsOpenR(false)
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
                    <td>{application.companyName}</td>
                    <td>{application.position}</td>
                    <td>{application.interview.toString()}</td>
                    <td>{application.location}</td>

                    <td>
                      <button
                        type="button"
                        onClick={showModalI}
                        className="interviewBtn"
                        id={application._id}
                        value={application.interview}
                        // onClick={() => editInterview(application._id)}
                        // onClick={() => console.log(application._id)}
                      >
                        <a className="check">{check}</a>
                      </button>
                      <button
                        type="button"
                        onClick={showModalR}
                        id={application._id}
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
                <form className="mt-4 new-app" onSubmit={handleFormSubmit}>
                  {/* add onsubmit as attribute with handleformsubmit inside form*/}

<div className="form-group">
    <label for="companyName"><strong>Company Name*</strong></label>
    <input type="input" className="form-control companyName" id="companyName" name="companyName"
        aria-describedby="companyName" placeholder="Company Name" onChange={handleInputChange} value={applicationData.companyName}/>
        {/* add 2 attributes inside input 1 being onChange set = {handleinputchange} the other being value set = applicationData.whateverinfo (companyName)  */}

</div>

<br/>
<div className="form-group">
    <label for="age"><strong>Position Title*</strong> </label>
    <input type="input" className="form-control" id="position" name="position"
        aria-describedby="position" placeholder="Position Title" onChange={handleInputChange} value={applicationData.position}/>

</div>

<br/>
<div className="form-group">
    <label for="date"><strong>Date Applied*</strong> </label>
    <input type="input" className="form-control" id="date" name="dateApplied" aria-describedby="date"
        placeholder="ie 02/05/2021" onChange={handleInputChange} value={applicationData.dateApplied}/>

</div>
<br/>
<div className="form-group">
    <label for="location"><strong>Location</strong></label>
    <input type="input" className="form-control" id="location" name="location"
        aria-describedby="location" placeholder="City, State or Remote" onChange={handleInputChange} value={applicationData.location}/>

</div>
<br/>
<div className="form-group">
    <label for="description"><strong>Job Description</strong></label>
    <textarea type="input" className="form-control" id="description" name="description"
        aria-describedby="description" row="3" placeholder="" onChange={handleInputChange} value={applicationData.description}></textarea>

</div>
<br/>
<div className="form-group">
    <label for="notes"><strong>Additional Notes</strong></label>
    <textarea type="input" className="form-control" id="notes" name="notes" aria-describedby="notes"
        row="3" placeholder=""></textarea>
        </div>


    <br/>


    <button type="submit" onClick={handleFormSubmit}>Add application</button>
    <p>* indicates required field </p>
</form>
</div>
</div>
</div>


      </Modal>


      <Modal
        show={isOpenI}
        onHide={hideModalI}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-header border-0"><button className="btn-close" type="button" onClick={handleFormSubmitI, hideModalI} data-bs-dismiss="modal" aria-label="Close"></button></div><div className="modal-body  pb-1">
    <div className="container">
        <div className="row ">
            <div className="col">

            </div>
                <form className="mt-4 new-app" onSubmit={handleFormSubmitI}>

<h2 className="text-center">Congratulations on your Interview!</h2>
<div className="form-group">
    <label for="interviewDate"><strong>When is it?</strong></label>
    <input type="input" className="form-control interviewDate" id="interviewDate" name="interviewDate"
        aria-describedby="interviewDate" placeholder="ie 04/15/2022" onChange={handleInputChangeI} value={interviewData.interviewDate}/>
       

</div>

<br/>
<div className="form-group">
    <label for="age"><strong>What time is it?</strong> </label>
    <input type="input" className="form-control" id="interviewTime" name="interviewTime"
        aria-describedby="interviewTime" placeholder="ie 2:00PM" onChange={handleInputChangeI} value={interviewData.interviewTime}/>

</div>

<br/>
<div className="form-group">
    <label for="date"><strong>Where is it?</strong> </label>
    <input type="input" className="form-control" id="interviewLocation" name="interviewLocation" aria-describedby="interviewLocation"
        placeholder="ie virtual or on-site" onChange={handleInputChangeI} value={interviewData.interviewLocation}/>

</div>
<br/>
<div class="hidden">
                <label for="pet-type"><strong>Type</strong></label>
                <div class="form-check">
                    <input type="radio" class="form-check-input" value={true} name="interview" onSiteChanged={handleRadioChangeI} checked/>
                </div>
                </div>

    <button type="submit" onClick={handleFormSubmitI}>Update Status</button>

</form>
</div>
</div>
</div>


      </Modal>

      <Modal
        show={isOpenR}
        onHide={hideModalR}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-header border-0"><button className="btn-close" type="button" onClick={handleFormSubmitR, hideModalR} data-bs-dismiss="modal" aria-label="Close"></button></div><div className="modal-body  pb-1">
    <div className="container">
        <div className="row ">
            <div className="col">

            </div>
                <form className="mt-4 new-app" onSubmit={handleFormSubmitR}>

<h2 className="text-center">Keep your head up!</h2>
<div className="form-group">
    <label for="dateRejected"><strong>When was your application rejected?</strong></label>
    <input type="input" className="form-control dateRejected" id="dateRejected" name="dateRejected"
        aria-describedby="dateRejected" placeholder="ie 04/15/2022" onChange={handleInputChangeR} value={rejectionData.dateRejected}/>
       

</div>
<br/>


    <button type="submit" onClick={handleFormSubmitR}>Update Status</button>

</form>
</div>
</div>
</div>


      </Modal>
    </div>
  );
}