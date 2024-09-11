import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulFrom from './components/StatefulForm/StatefulFrom'
import RefForm from './components/RefForm/RefForm'
import HookForm from './components/HookForm/HookForm'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulFrom></StatefulFrom> */}
      {/* <RefForm></RefForm> */}
      <HookForm></HookForm>
    </>
  )
}

export default App
