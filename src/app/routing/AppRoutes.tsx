import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import App from "../App";
import {PrivateRoute} from "./PrivateRoute";

const AppRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<App/>} >
                <Route path="/*" element={<PrivateRoute/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
};

export {AppRoutes}