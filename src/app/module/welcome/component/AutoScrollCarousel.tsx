import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; // Import the core Splide CSS
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'; // Import the AutoScroll extension

import ReactRouterIcon from '../../../../_xelth-info/assets/svg/icon-react-router.svg';
import BootstrapIcon from '../../../../_xelth-info/assets/svg/icons8-bootstrap.svg';
import ReduxIcon from '../../../../_xelth-info/assets/svg/icons8-redux.svg';
import ReactIcon from '../../../../_xelth-info/assets/svg/react-icon.svg';
import TypeScriptIcon from '../../../../_xelth-info/assets/svg/icons8-typescript.svg';
import NextIcon from "../../../../_xelth-info/assets/svg/icons8-nextjs.svg";
import {Image} from "react-bootstrap";

// Import your images or content

const AutoScrollCarousel = () => {
    return (
        <Splide
            options={{
                type   : 'loop',
                drag   : 'free',
                focus  : 'center',
                pagination: false,
                arrows: false,
                perPage: 4,
                autoScroll: {
                    speed: -0.8,
                },
            }}
            extensions={{ AutoScroll }}
        >
            <SplideSlide>
                <Image height={100} src={BootstrapIcon} alt="Bootstrap" />
            </SplideSlide>
            <SplideSlide>
                <Image height={100} src={ReactIcon} alt="React" />
            </SplideSlide>
            <SplideSlide>
                <Image height={100} src={ReduxIcon} alt="Redux" />
            </SplideSlide>
            <SplideSlide>
                <Image height={100} src={ReactRouterIcon} alt="Redux" />
            </SplideSlide>
            <SplideSlide>
                <Image height={100} src={NextIcon} alt="Redux" />
            </SplideSlide>
            <SplideSlide>
                <Image height={100} src={TypeScriptIcon} alt="Redux" />
            </SplideSlide>

            {/* Add more slides as needed */}
        </Splide>
    );
};

export default AutoScrollCarousel;
