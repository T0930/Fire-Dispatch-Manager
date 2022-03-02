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
  

  return (
    <div className="text-center">
      <br/><br/>
      <h1>Inspirational Quotes</h1>
      <br/>
      <br/>
      <h3 style={{color: 'seagreen'}}>The results you achieve will be in direct proportion to the effort you apply</h3>
      <br/>
      <h3 style={{color: 'blue'}}>You have to be odd to be number 1</h3>
      <br/>
      <h3 style={{color: 'purple'}}>Just say yikes and move on</h3>
      <br/>
      <h3 style={{color: 'magenta'}}>If cauliflower can become pizza, you can become anything</h3>
    </div>
  );
}