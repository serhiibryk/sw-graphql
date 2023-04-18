import React, { ReactNode } from 'react'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import Main from '../pages/Main'
import LogOut from '../pages/LogOut'

export interface IRoutes {
  path: string
  component: ReactNode
  privat: boolean
}

export const routes: IRoutes[] = [
  { path: '/', component: <Main />, privat: true },
  { path: '/login', component: <Login />, privat: false },
  { path: '/registration', component: <Registration />, privat: false },
  { path: '/logOut', component: <LogOut />, privat: false },
]
