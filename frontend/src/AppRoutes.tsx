import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={
          <Layout>
            <h1>Hello</h1>
          </Layout>
      }/>
        <Route path="/user-profile" element={<span>User Profile Page</span>}/>
        <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default AppRoutes;