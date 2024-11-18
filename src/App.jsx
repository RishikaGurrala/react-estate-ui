import Navbar from "./components/Navbar/Navbar"
import "./layout.scss"
import HomePage from "./routes/HomePage/homePage"
import ListPage from "./routes/ListPage/ListPage"
function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar />
      </div>
      <div className="content">
      <HomePage />
      </div>
      <div>
        <ListPage />
      </div>
      
      </div>
  )
}

export default App