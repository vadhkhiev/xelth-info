import {Container} from "react-bootstrap";
import {Outlet} from "react-router";
import Header from "./Header";

const RootLayout = () => {
    return (
        <>
            <header className="default-bg">
                <Header/>
            </header>
            <div className="main-content default-bg">
                <div>
                    <Container>
                        <Outlet/>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default RootLayout;