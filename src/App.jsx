import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


import MainCatButton from './components/MainCategoryButton'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import PopolariBanner from './components/PopolariBanner'

function App() {

  return (
    <>
      <div className=''>
        <NavBar />
        <PopolariBanner></PopolariBanner>


      </div>
    </>
  )
}


export default App
