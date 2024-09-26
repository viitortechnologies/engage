import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Customers from "../../Pages/Customers";

function AppRoutes(){
    return (
				<Routes>
					<Route path="/" element={<Dashboard/>} />
					<Route path="/dashboard" element={<Dashboard/>} />
					<Route path="/customers" element={<Customers/>} />
				</Routes>
    )
}

export default AppRoutes;