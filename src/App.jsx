import { useState } from 'react'
import Project from './sections/Projects'
import Goals from './sections/Goals'
import AbourMe from './sections/AboutMe'
import HeaderBackground from './sections/HeroBanner'
import './App.css'
import Contact from './sections/Contact'
import data from './assets/data.json'

function App() {
  return (
    <>
      <HeaderBackground header={data.header}/>
      <AbourMe about={data.about}/>
      <Project projectList={data.projects}/>
      <Goals goals={data.goals}/>
      <Contact contact={data.contact}/>
    </>
  )
}

export default App
