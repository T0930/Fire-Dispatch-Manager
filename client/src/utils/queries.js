import { gql } from '@apollo/client';

export const QUERY_APPLICATIONS = gql`
  query applications {
    applications {
      _id
      companyName
      position
      dateApplied
      location
    }
  }
`;

export const  QUERY_INTERVIEWS = gql`
query Application($interview: Boolean) {
  interview(interview: $interview) {
    companyName
    position
    location
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
`