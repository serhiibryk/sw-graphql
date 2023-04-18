import React from 'react'
import { Layout } from 'antd'
import { format } from 'date-fns'

import useStyles from './style'

const { Footer: FooterAnt } = Layout

const Footer = () => {
  const classes = useStyles()
  const date = format(new Date(), 'yyyy-MM-dd')
  return (
    <FooterAnt className={classes.textAlign}>
      <div>
        <p>All rigths reserved&#174; &mdash;&mdash; {date}</p>
      </div>
    </FooterAnt>
  )
}

export default Footer
