import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Academic from "./pages/Academic"
import Research from "./pages/Research"
import Administrative from "./pages/Administrative"
import Achievements from "./pages/Achievements"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"


function App() {
  

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home/>
            </Layout>
          }
        />
        <Route
          path="/academic"
          element={
            <Layout>
              <Academic/>
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects/>
            </Layout>
          }
        />
        <Route
          path="/research"
          element={
            <Layout>
              <Research/>
            </Layout>
          }
        />
        <Route
          path="/administrative"
          element={
            <Layout>
              <Administrative/>
            </Layout>
          }
        />
        <Route
          path="/achievements"
          element={
            <Layout>
              <Achievements/>
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact/>
            </Layout>
          }
        />
       
      </Routes>
    </>
  )
}

export default App
