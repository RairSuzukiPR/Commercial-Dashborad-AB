import { useRoutes } from "react-router"
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { WareHouse } from "../pages/WarehousePages/Warehouse";
import { WarehouseCreate } from "../pages/WarehousePages/WareHouseCreate";
import { Employees } from "../pages/EmployeesPages/Employees";
import { EmployeesCreate } from "../pages/EmployeesPages/EmployeesCreate";
import RequireAuth  from "../RequireAuth";
import { Cashier } from "../pages/Cashiers/Cashier";


export const MainRoutes = () => {
    return useRoutes([
        {path: '/login', element: <Login/>},
        {path: '/home', element: <Home/>},
        {path: '/caixa', element: <Cashier/>},
        {path: '/estoque', element: <WareHouse/>},
        {path: '/estoque/cadastrar', element: <WarehouseCreate/>},
        {path: '/funcionarios', element: <Employees/>},
        {path: '/funcionarios/cadastrar', element:<RequireAuth><EmployeesCreate/></RequireAuth> },
        {path: '/financeiro', element: <RequireAuth><Home/></RequireAuth>},
        {path: '/relatorios', element: <RequireAuth><Home/></RequireAuth>},
        {path: '/perfil', element: <RequireAuth><Home/></RequireAuth>},
        {path: '/configuracoes', element: <RequireAuth><Home/></RequireAuth>},
        {path: '/logout', element: <Login/>},
        {path: "*", element: <RequireAuth><NotFound /></RequireAuth>}
    ]);
}