import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import MainCatButton from './components/MainCategoryButton'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import PopolariBanner from './components/PopolariBanner'
import Card from './components/Card'
import HeaderMain from './components/HeaderMain'
import FooterBox from './components/FooterBox'


function App() {

  return (
    <>
      <NavBar />

      <div>
        <HeaderMain />
      </div>

      <div className="cards-container" style={{ marginTop: "40px" }}>
        <MainCatButton title="Informatica" icon="informatica"></MainCatButton>
        <MainCatButton title="Arte" icon="arte"></MainCatButton>
        <MainCatButton title="Musica" icon="musica"></MainCatButton>
        <MainCatButton title="Artigianato" icon="artigianato"></MainCatButton>
        <MainCatButton title="Sociali" icon="sociali"></MainCatButton>
      </div>
      <hr></hr>
    <FooterBox>

    </FooterBox>
    </>
  )
}



export default App
