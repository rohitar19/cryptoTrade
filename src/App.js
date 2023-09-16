import React from 'react';
import { Route, Routes , Link} from 'react-router-dom';
import {Layout , Typography , Space} from 'antd';

// import Navbar from './components/Navbar';
// import Exchange from './components/Exchanges';
// import Homepage from './components/Homepage';
// import Cryptocurrencies from './components/Cryptocurrencies';
// import CryptoDetail from './components/CryptoDetail';
// import News from './components/News';



import { Navbar , Exchanges , Homepage , Cryptocurrencies , News , CryptoDetail } from './components';
import './App.css'
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
          <Navbar />
      </div>
      <div className="main">
       
      <Layout> 
      
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
           
            <Route exact path="/exchanges" element={<Exchanges />}/>
              
            <Route exact path="/cryptocurrencies"  element={<Cryptocurrencies />} />
            
            <Route exact path="/crypto/:coinId" element={<CryptoDetail />} />
            
            <Route exact path="/news" element={<News />} />

          </Routes>
        </div>
        
      </Layout>
     
      </div>
      <div className="footer">
             
      <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            CryptoTrade Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>

      </div>
     
    </div>
  ); 
}

export default App
