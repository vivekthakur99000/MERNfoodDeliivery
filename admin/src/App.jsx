
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Sidebar from './components/Sidebar/Sidebar'
import {Route, Routes} from"react-router-dom"
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'

function App() {

  const url = "http://localhost:4000"

 

  return (
    <div>
      <NavBar/>
      <hr />
      <div className="app-content flex  ">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
        
      </div>
    </div>
  )
}

export default App
