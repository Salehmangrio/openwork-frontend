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
import ChatLayout from './pages/Chat/ChatLayout'
import ChatRoom from './pages/Chat/ChatRoom'
import FreelancerLayout from "./pages/Dashboard/layouts/FreelancerLayout"
import ClientsLayout from "./pages/Dashboard/layouts/ClientsLayout"
import ProfilePage from "./pages/Profile/Profile"
import OfferCreatePage from "./pages/Offers/CreateOffer"
import PostJob from "./pages/Jobs/PostJob"

function App() {

      const routes = createBrowserRouter(
            createRoutesFromElements(
                  <>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/* Client Routes */}
                        <Route path="/client" element={<ClientsLayout />} >
                              <Route index element={<ClientDashboard />} />
                              <Route path="chat" element={<ChatLayout />}>
                                    <Route path=":id" element={<ChatRoom />} />
                              </Route>
                              <Route path="profile" element={<ProfilePage />} />
                              <Route path="post-job" element={<PostJob />} />
                        </Route>

                        {/* Freelancer Routes */}
                        <Route path="/freelancer" element={<FreelancerLayout />} >
                              <Route index element={<FreelanceDashboard />} />
                              <Route path="chat" element={<ChatLayout />}>
                                    <Route path=":id" element={<ChatRoom />} />
                              </Route>
                              <Route path="profile" element={<ProfilePage />} />
                              <Route path="create-offer" element={<OfferCreatePage />} />
                        </Route>
                  </>
            )
      )

      return (
            <RouterProvider router={routes} />
      )
}

export default App
