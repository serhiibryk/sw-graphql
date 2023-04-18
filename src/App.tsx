import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'

import Route from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'
import SideBar from './components/SideBar'

const { Content } = Layout

function App() {
  return (
    <Layout style={{ background: 'grey' }}>
      <BrowserRouter>
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: 'grey' }}>
            <SideBar />
            <Content style={{ minHeight: 280 }}>
              <Route />
            </Content>
          </Layout>
        </Content>
        <Footer />
      </BrowserRouter>
    </Layout>
  )
}

export default App
