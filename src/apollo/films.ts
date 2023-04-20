import { gql } from '@apollo/client'

export const ALL_FILMS = gql`
  query AllFilms {
    allFilms {
      totalCount
      films {
        id
        title
      }
    }
  }
`
