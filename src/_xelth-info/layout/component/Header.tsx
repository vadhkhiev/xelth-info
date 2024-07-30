import {Container} from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Container style={{color:"#cccccc", height:"10vh"}} className="default-bg py-3 font-inter d-flex justify-content-between">
                <div><h3>Vadh</h3></div>
                <div><h4>Let's talk -</h4></div>
            </Container>
        </>
    )
}

export default Header;