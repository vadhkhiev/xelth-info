import {Route, Routes} from "react-router";
import WelcomePage from "../module/welcome/WelcomePage";
import RootLayout from "../../_xelth-info/layout/component/RootLayout";

const PrivateRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout/>} >
                <Route index element={<WelcomePage/>}/>
                <Route path="/about" element={<h2>Vadh Says Hello</h2>}/>
                <Route path="/project" element={<h2>I did this</h2>}/>
                <Route path="/contact" element={<h2>Contact Me</h2>}/>
            </Route>
            <Route path="*" element={<h2>Not Found Page</h2>}/>
        </Routes>
    )
}

export { PrivateRoute };