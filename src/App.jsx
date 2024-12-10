import React from 'react'
import { Navbar } from './component/Navbar'
import { DashboardHeader } from './component/DashboardHeader'
import { AddPlaceForm } from './component/AddPlaceForm'
import Footer from './component/Footer'

export default function App() {
  return (
    <div>
      <DashboardHeader/>
      <Navbar/>
      <AddPlaceForm />
      {/* <Footer/> */}
    </div>
  )
}