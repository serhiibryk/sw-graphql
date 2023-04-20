import { gql } from '@apollo/client'

export const ALL_STARSHIPS = gql`
  query AllStarships {
    allStarships {
      totalCount
      starships {
        id
        name
      }
    }
  }
`
