import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={
          <Layout>
            <span>Home Page</span>
          </Layout>
        }
          />
        <Route path="/user-profile" element={<span>USER PROFILE Page</span>}/>
        <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default AppRoutes;