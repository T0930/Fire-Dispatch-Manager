import { gql } from '@apollo/client';


export const ADD_APPLICATION = gql`
mutation addApplication($companyName: String!, $position: String!, $dateApplied: String!, $location: String, $description: String) {
    addApplication (companyName: $companyName, position: $position, dateApplied: $dateApplied, location: $location, description: $description) {
     
      companyName
      position
      dateApplied
      location
      description

    }
  }
  `;

//   mutation addApplication($companyName: String!, $position: String!, $dateApplied: String!, $description: String, $location: String) {
//     addApplication (companyName: $companyName, position: $position, dateApplied: $dateApplied, description: $description, location: $location) {
//       companyName
//       position
//     }
//   }
export const EDIT_INTERVIEW = gql`
mutation editInterview($applicationId: ID!, $interviewDate: String, $interviewTime: String, $interviewLocation: String) {
  editInterview(applicationId: $applicationId, interviewDate: $interviewDate, interviewTime: $interviewTime, interviewLocation: $interviewLocation) {
    interview
    interviewDate
    interviewTime
    interviewLocation
  }
}
`;





export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;