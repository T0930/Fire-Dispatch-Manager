import { gql } from '@apollo/client';

export const QUERY_APPLICATIONS = gql`
  query applications {
    applications {
      _id
      companyName
      position
      dateApplied
      location
      interview
    }
  }
`;

export const  QUERY_INTERVIEWS = gql`
query Application($interview: Boolean) {
  interview(interview: $interview) {
    companyName
    position
    location
    interviewDate
    dateApplied
  }
}
`
export const  QUERY_REJECTIONS = gql`
query Application($rejection: Boolean) {
  rejection(rejection: $rejection) {
    companyName
    position
    location
    dateApplied
    dateRejected
  }
}
`;

export const QUERY_SINGLE_APPLICATION = gql`
  query singleApplication($applicationId: ID!) {
    application(applicationId: $applicationId) {
      companyName
      position
      description
      notes {
        noteText
      }
    }
  }
`;
