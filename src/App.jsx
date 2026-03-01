import { Routes, Route } from 'react-router-dom'
import LawyerProfile from './pages/LawyerProfile'
import UserRegister from './pages/UserRegister'
import CarShippingCalculator from './pages/CarShippingCalculator'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LawyerProfile />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/calculator" element={<CarShippingCalculator />} />
    </Routes>
  )
}
