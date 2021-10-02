import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/">
                <Exchanges />
              </Route>
              <Route exact path="/crypto/:coinID">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges/>
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
            Cryptoverse <br/>
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/new">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App
