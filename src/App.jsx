import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulFrom from './components/StatefulForm/StatefulFrom'
import RefForm from './components/RefForm/RefForm'
import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('handle signup data: ', data)
  }

  const handleUpdateProfile = data => {
    console.log('updata profile data: ', data)
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulFrom></StatefulFrom> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <h2>Sign Up Form</h2>
        <p>Please sign up right now</p>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <h2>Profile Update Form</h2>
        <p>Always keep your profile updated</p>
      </ReusableForm>
    </>
  )
}

export default App
