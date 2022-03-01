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
mutation editInterview($applicationId: ID!, $interview: Boolean) {
  editInterview (applicationId: $applicationId, interview: $interview) {
    _id
    interview
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