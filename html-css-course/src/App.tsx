import './App.scss'
import Header from './components/Header'
import Info from './components/Info'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <div className="container">
        <Header/>
          <Info />
          <SideBar />
    </div>
  )
}

export default App