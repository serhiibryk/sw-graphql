import React, { FC } from 'react'

import Sider from 'antd/es/layout/Sider'

import useStyles from './style'
import { useAppSelector } from '../../store/hooks/redux'
import classNames from 'classnames'

const SideBar: FC = () => {
  const { token } = useAppSelector((state) => state.user)
  const classes = useStyles()

  return (
    <div className={classNames(classes.root, { hide: !token })}>
      <Sider style={{ background: 'grey' }} width={300}>
        <div className={classes.sideBar}>History</div>
      </Sider>
    </div>
  )
}

export default SideBar
