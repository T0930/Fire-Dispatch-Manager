import { gql } from '@apollo/client';

export const QUERY_APPLICATIONS = gql`
  query applications {
    applications {
      _id
      companyName
      position
      dateApplied
      rejection
      dateRejected
      location
      notes {
        noteText
      }
      interview
      interviewDate
      interviewTime
      createdAt
    }
  }
`;