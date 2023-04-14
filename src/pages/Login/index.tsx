import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import { jwtService } from '../../services/jwt'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { userReducer } from '../../store/user/reducer'
import { localStoreService } from '../../utils'
import InputComponent from '../../components/Input'

import useStyles from './style'

const Login: React.FC = () => {
  const classes = useStyles()
  const push = useNavigate()

  const { data } = useAppSelector<IStateUserData>((state) => state.userData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    localStoreService.remove('user')
    dispatch(userReducer.setUser(null))
  }, [dispatch])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (values: IValueLogin) => {
    const checkUser = data.find((same) => same.email === values.email)
    if (checkUser && checkUser.password === values.password) {
      const { token } = jwtService.getJwt()
      localStoreService.set('user', token)
      dispatch(userReducer.setUser(token))
      push('/')
    }
  }
  return (
    <div className={classes.root}>
      <form className={classes.LoginForm} onSubmit={handleSubmit(onSubmit as any)}>
        <InputComponent
          rules={register('email', {
            required: true,
            maxLength: 20,
          })}
          title={'Email'}
          placeholder={'placeholder'}
        >
          {errors.email && <p>The input is not valid E-mail!</p>}
        </InputComponent>
        <InputComponent
          rules={register('password', {
            required: true,
            minLength: {
              value: 1,
              message: 'Password must have at least 8 characters',
            },
          })}
          title={'Password'}
          placeholder={'placeholder'}
        >
          {errors.password && <p>Password must have at least 8 characters</p>}
        </InputComponent>
        <div className={classes.loginButtonContainer}>
          <button className={classes.loginButton} type={'submit'}>
            Login
          </button>
          <a
            className={classes.registerNowLink}
            href={'/registration'}
            onClick={() => push('/registration')}
          >
            Register
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login
