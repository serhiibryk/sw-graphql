import { gql } from '@apollo/client'

export const ALL_PLANETS = gql`
  query AllPlanets {
    allPlanets {
      totalCount
      planets {
        id
        name
      }
    }
  }
`
