import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import ShowCreators from './pages/ShowCreators/ShowCreators';
import ViewCreator from './pages/ViewCreator/ViewCreator';
import AddCreator  from './pages/AddCreator/AddCreator';
import EditCreator from './pages/EditCreator/EditCreator';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/view" element={<ViewCreator />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit" element={<EditCreator />} />
      </Routes>
    </Router>
  )
}

export default App
