import { useState } from 'react'
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'

import MainCatButton from '../components/MainCategoryButton'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import PopolariBanner from '../components/PopolariBanner'
import Card from '../components/Card'
import FooterBox from '../components/FooterBox'

function App() {
   const { id } = useParams();

  return (
    <>
      <div className='MainContainer'>
        <NavBar />
        <PopolariBanner categoryId={id}></PopolariBanner>
        <div className='cardContainer'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <FooterBox>
      </FooterBox>
    </>
  )
}



export default App