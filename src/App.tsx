import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'

import Route from './routes'

import './App.css'

const { Content } = Layout

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Content className={'content'}>
          <Route />
        </Content>
      </BrowserRouter>
    </Layout>
  )
}

export default App
