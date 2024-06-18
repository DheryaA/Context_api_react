
import './App.css'
import Profile from './Components/Profile'
import Login from './Components/login'
import UserContaxtProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContaxtProvider>
      <Login/>
      <Profile/>
    </UserContaxtProvider>
  )
}

export default App
