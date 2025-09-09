import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Todo from "./components/Todo";
import About from "./components/About";
import Contact from "./components/Contact"

function App() {

  return (
    <div className="app">
      <NavBar />
      
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    {/* <Footer /> */}
    </div>
  )
}

export default App
