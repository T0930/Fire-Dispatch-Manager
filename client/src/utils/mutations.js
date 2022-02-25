import { gql } from '@apollo/client';


export const ADD_APPLICATION = gql`
mutation addApplication($companyName: String!, $position: String!, $dateApplied: String!) {
    addApplication (companyName: $companyName, position: $position, dateApplied: $dateApplied, description: $description, location: $location) {
      companyName
      position
      dateApplied
    }
  }
  `;

//   mutation addApplication($companyName: String!, $position: String!, $dateApplied: String!, $description: String, $location: String) {
//     addApplication (companyName: $companyName, position: $position, dateApplied: $dateApplied, description: $description, location: $location) {
//       companyName
//       position
//     }
//   }