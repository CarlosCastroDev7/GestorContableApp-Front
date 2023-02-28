import { Routes,Route } from "react-router-dom"
import { IngresosApp } from "../ingresos/IngresosApp"
export const RoutePage = () => {
  return (
    <Routes>
        <Route path="/" element={<IngresosApp />} />
        {/* <Route path="/demas" element={<Gastos />} /> */}
    </Routes>
  )
}
