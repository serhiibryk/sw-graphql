import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card as CardComponent } from 'antd'
import Meta from 'antd/lib/card/Meta'

import useStyles from './style'

interface ICard {
  path: string
  img: string
  title: string
  imgSrc: string
}

const Card: FC<ICard> = ({ path, img, title, imgSrc }) => {
  const classes = useStyles()

  const push = useNavigate()

  return (
    <CardComponent
      hoverable
      className={classes.card}
      cover={<img className={classes.img} key={img} src={imgSrc} alt={'img'} />}
      onClick={() => push(`${path}`)}
    >
      <Meta title={title} />
    </CardComponent>
  )
}

export default Card
