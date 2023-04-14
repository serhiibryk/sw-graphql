import React from 'react'

import { useNavigate } from 'react-router-dom'

import useStyles from './style'
import { useAppDispatch } from '../../store/hooks/redux'
import { localStoreService } from '../../utils'
import { userReducer } from '../../store/user/reducer'

const Main = () => {
  const classes = useStyles()
  const push = useNavigate()
  const dispatch = useAppDispatch()

  const logOutClick = () => {
    localStoreService.set('user', '')
    dispatch(userReducer.setUser(null))
    push('/login')
  }

  return (
    <div className={classes.root}>
      <button onClick={logOutClick}>Log out</button>
    </div>
  )
}

export default Main
