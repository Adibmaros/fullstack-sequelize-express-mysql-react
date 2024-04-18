import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import AddUser from "./components/AddUser"
import UserList from "./components/UserList"
import EditUser from './components/EditUser'
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/add" element={<AddUser/>}/>
      <Route path="/edit/:id" element={<EditUser/>}/>

    </Routes>
   </Router>
  )
}

export default App
