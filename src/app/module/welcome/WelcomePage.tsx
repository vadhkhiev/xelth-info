import React from 'react';
import { Container} from 'react-bootstrap';
import AutoScrollCarousel from "./component/AutoScrollCarousel";

const WelcomePage = () => {
    return (
        <Container className="welcome-page">
            <main className="mb-5">
                <h1 className="text font-stylist text-wrap display-1">KHIEV ViVADH</h1>
                <h5 className="fs-3">Front-end Web Developer</h5>
            </main>
            <section>
                <AutoScrollCarousel/>
            </section>
            <section className="d-flex justify-content-center mt-5">
                <button>
                    Get Started
                </button>
            </section>
        </Container>
    );
};

export default WelcomePage;
