import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/about';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import Reset from './pages/auth/reset';
import Timeline from './pages/users/timeline';
import Dashboard from './pages/users/dashboard';
import NewArticle from './pages/users/newpost';
import Statistics from './pages/users/statistics';
import Report from './pages/users/report';
import Logout from './pages/users/logout';
import reportWebVitals from './reportWebVitals';
import Wallet from './pages/users/wallet';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<App />}/>
      <Route path = '/about' element = {<About />} />
      <Route path = '/auth' element = {<Signin />}/>
      <Route path = '/auth/signup' element = {<Signup />}/>
      <Route path = '/auth/reset' element = {<Reset />}/>
      <Route path = '/users/timeline' element = {<Timeline />}/>
      <Route path = '/users/dashboard' element = {<Dashboard />}/>
      <Route path = '/users/statistics' element = {<Statistics />} />
      <Route path = '/users/wallet' element = {<Wallet />} />
      <Route path = '/users/dashboard/newarticle' element = {<NewArticle />} />
      <Route path = '/users/report' element = {<Report />} />
      <Route path = '/users/logout' element = {<Logout />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
