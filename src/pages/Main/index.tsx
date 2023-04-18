import React from 'react'

import { useNavigate } from 'react-router-dom'

import useStyles from './style'
import { useAppDispatch } from '../../store/hooks/redux'
import { localStoreService } from '../../utils'
import { userReducer } from '../../store/user/reducer'
import { useQuery } from '@apollo/client'
import { ALL_FILMS } from '../../apollo/films'
import Card from '../../components/Card'

const Main = () => {
  const classes = useStyles()
  const push = useNavigate()
  const dispatch = useAppDispatch()

  const { data, loading, error } = useQuery(ALL_FILMS)

  const logOutClick = () => {
    localStoreService.set('user', '')
    dispatch(userReducer.setUser(null))
    push('/login')
  }
  if (error) {
    return <div>ERROR!!!!</div>
  }
  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div className={classes.root}>
      {data.allFilms.films.map((film: IFilm, i: number) => {
        return <Card path={''} img={''} title={film.title} imgSrc={' '} key={i} />
      })}
      <button className={classes.button} onClick={logOutClick}>
        Log out
      </button>
    </div>
  )
}

export default Main
