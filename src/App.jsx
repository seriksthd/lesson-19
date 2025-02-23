import React from 'react'
import { Header } from './components/Header'
import TourForm from './components/TourForm'
import TourList from './components/TourList'

export default function App() {
  return (
    <div>
      <Header/>
      <TourForm/>
      <TourList/>
    </div>
  )
}
