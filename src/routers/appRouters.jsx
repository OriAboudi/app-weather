import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import Layout from '../layout/layout';
const AppRouters = () => {

  return (
    <Router>
      <Routes>
        {/* User Layout */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/*' element={<h1>Not Found 404</h1>} />
        </Route>


        {/* Not Found */}
      </Routes>


    </Router>
  )
}

export default AppRouters