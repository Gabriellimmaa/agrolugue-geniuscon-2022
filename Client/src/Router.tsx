import { Routes, Route } from 'react-router-dom'
import Cadastro from './screens/Dashboard/Cadastro'
import Login from './screens/Dashboard/Login'
import Vendor from './screens/Dashboard/Vendor'

export function Router() {
  return (
    <Routes>
      {/* Dashboards */}
      <Route path="/login" element={<Login/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/vendor" element={<Vendor/>} />
    </Routes>
  )
}