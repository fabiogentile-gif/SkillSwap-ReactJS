import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css' 
import MainCatButton from './components/MainCategoryButton'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import PopolariBanner from './components/PopolariBanner'
import Card from './components/Card'
import FooterBox from './components/FooterBox'
function SkillPage() {

  return (
    <>
      <div className='MainContainer'>
        
        <PopolariBanner></PopolariBanner>
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
    </>
  )
}



export default SkillPage