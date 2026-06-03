import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import MainCatButton from './components/MainCategoryButton'
import NavBar from './components/NavBar'
import HeaderMain from './components/HeaderMain'


function App() {

  return (
    <>
      <NavBar />

      <div>
        <HeaderMain />
      </div>
      <div className='bodyContainer'>
        <div className="cards-container" style={{ marginTop: "40px" }}>
          <MainCatButton title="Informatica" icon="informatica"></MainCatButton>
          <MainCatButton title="Arte" icon="arte"></MainCatButton>
          <MainCatButton title="Musica" icon="musica"></MainCatButton>
          <MainCatButton title="Artigianato" icon="artigianato"></MainCatButton>
          <MainCatButton title="Sociali" icon="sociali"></MainCatButton>
        </div>
      </div>


    </>
  )
}

export default App
