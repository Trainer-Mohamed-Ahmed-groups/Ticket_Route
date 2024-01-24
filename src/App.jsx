import SiteFooter from "./layout/Footer"
import SiteNav from "./layout/Nav"
import { Routes, Route } from "react-router-dom"
import HomePage from "./views/HomePage"
import About from "./views/About"
import Service from "./views/Service"

function App() {

  return (
    <>
      <SiteNav />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={About} />
        <Route path="/service/:title" Component={Service} />
      </Routes>

      {/* <SiteFooter /> */}
    </>
  )
}

export default App
