import React from 'react'

import useStyles from './style'
import { useQuery } from '@apollo/client'
import { ALL_FILMS } from '../../apollo/films'
import Card from '../../components/Card'

const Main = () => {
  const classes = useStyles()

  const { data, loading, error } = useQuery(ALL_FILMS)

  if (error) {
    return <div className={classes.root}>ERROR!!!!</div>
  }
  if (loading) {
    return <div className={classes.root}>loading...</div>
  }

  return (
    <div className={classes.root}>
      {data.allFilms.films.map((film: IFilm, i: number) => {
        return (
          <Card
            path={''}
            img={''}
            title={film.title}
            imgSrc={'https://i.work.ua/article/2128b.png'}
            key={i}
          />
        )
      })}
    </div>
  )
}

export default Main
