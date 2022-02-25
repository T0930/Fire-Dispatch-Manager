import { gql } from '@apollo/client';

export const QUERY_APPLICATIONS = gql`
  query applications {
    me {
      _id
      companyName
      postion
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