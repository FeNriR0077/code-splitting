import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
const Home = lazy(() => import("./components/Home"))
const About = lazy(() => import("./components/About"))


function App() {

  return (
    <Router>
      <nav className="block mx-auto w-fit mt-4">
        <ul className="grid grid-cols-2 gap-2 font-extrabold text-2xl text-sky-600">
          <li className="hover:text-sky-900"><Link to="/">HOME</Link></li>
          <li className="hover:text-sky-900"><Link to="/about">ABOUT</Link></li>
        </ul>
      </nav>
      <main className="m-3">
      
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
      </Suspense>
      </main>
    </Router>
  )
}

export default App
