import React, { useState } from 'react'

import useStyles from './style'
import { useQuery } from '@apollo/client'
import Card from '../../components/Card'

import { Form, Select } from 'antd'

import { ALL_STARSHIPS } from '../../apollo/starships'
import Search from '../../components/Search'
import { categories } from '../../utils'
import { ALL_PLANETS } from '../../apollo/planets'
import { ALL_FILMS } from '../../apollo/films'

const Main = () => {
  const classes = useStyles()
  const [form] = Form.useForm()

  const [filterOption, setFilterOption] = useState('')
  const [currentCategory, setCurrentCategory] = useState()
  const [openFilterMenu, setOpenFilterMenu] = useState(false)

  const { data: films, loading: filmsLoading, error: filmsError } = useQuery(ALL_FILMS)
  const { data: planets, loading: planetsLoading, error: planetsError } = useQuery(ALL_PLANETS)
  const {
    data: starships,
    loading: loadingStarships,
    error: errorStarships,
  } = useQuery(ALL_STARSHIPS)

  console.log(currentCategory)

  if (errorStarships || planetsError || filmsError) {
    return <div className={classes.root}>ERROR!!!!</div>
  }
  if (planetsLoading || loadingStarships || filmsLoading) {
    return <div className={classes.root}>loading...</div>
  }

  // const initFormValue = Array.from(
  //   categories().reduce((category: any, categoryKey) => {
  //     category[categoryKey.key] = !!Array.from(filterOption).find((x) => x === categoryKey.key)
  //     console.log('isCountry', category)

  //     return category
  //   }, {}),
  // )

  return (
    <div className={classes.root}>
      <Form
        form={form}
        className={'categoryForm'}
        // initialValues={}
        onFinish={() => {
          // filteredCompanies
          setOpenFilterMenu(false)
        }}
        onReset={() => setFilterOption('')}
      >
        <div className={classes.searchWrapper}>
          {/* <Search category={filterOption} name={'name'} setSearchState={() => console.log} /> */}
          <Select
            style={{ width: 300 }}
            placeholder={'Select category'}
            options={categories().map((category) => ({
              label: category.label,
              value: category.label,
            }))}
          />
        </div>
      </Form>
      <div className={classes.cards}>
        {starships.allStarships.starships.map((planet: any, i: number) => {
          return (
            <Card
              path={''}
              img={''}
              title={planet.name}
              imgSrc={'https://i.work.ua/article/2128b.png'}
              key={i}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Main
