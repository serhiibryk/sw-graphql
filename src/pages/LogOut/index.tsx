import React from 'react'

import { useNavigate } from 'react-router-dom'

import useStyles from './style'
import { useAppDispatch } from '../../store/hooks/redux'
import { localStoreService } from '../../utils'
import { userReducer } from '../../store/user/reducer'

const LogOut = () => {
  const classes = useStyles()
  const push = useNavigate()
  const dispatch = useAppDispatch()

  const logOutClick = () => {
    localStoreService.set('user', '')
    dispatch(userReducer.setUser(null))
    push('/login')
  }

  // function sortStringByNumber(str: string) {
  //   if (!str) {
  //     return ''
  //   }
  //   const words = str.split(' ')
  //   const sortedWords: string[] = []
  //   for (let i = 0; i < words.length; i++) {
  //     const word = words[i]
  //     const match = word.match(/\d+/)
  //     if (match) {
  //       const number = parseInt(match[0])
  //       sortedWords[number - 1] = word
  //     }
  //   }
  //   return sortedWords.join(' ')
  // }

  // console.log(sortStringByNumber('is2 Thi1s T4est 3a'))
  // console.log(sortStringByNumber('4of Fo1r pe6ople g3ood th5e the2'))

  return (
    <div className={classes.root}>
      <button className={classes.button} onClick={logOutClick}>
        Log out
      </button>
    </div>
  )
}

export default LogOut
