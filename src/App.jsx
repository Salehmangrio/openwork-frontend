import React from "react"
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import FreelanceDashboard from "./pages/Dashboard/FreelanceDashboard"
import {
      createBrowserRouter,
      createRoutesFromElements,
      Route,
      RouterProvider
} from "react-router-dom"
import ClientDashboard from "./pages/Dashboard/ClientDashboard"

function App() {

      const routes = createBrowserRouter(
            createRoutesFromElements(
                  <>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/client" element={<ClientDashboard />} />
                        <Route path="/freelancer" element={<FreelanceDashboard />} />
                  </>
            )
      )

      return (
            <RouterProvider router={routes} />
      )
}

export default App
