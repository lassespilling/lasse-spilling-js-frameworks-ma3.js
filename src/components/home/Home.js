import React from "react";
import Heading from "../layout/Heading";
import HomeContent from "../layout/HomeContent";
import AbsoluteWrapper from "../layout/AbsoluteWrapper";

const Home = () => {
    return (
        <AbsoluteWrapper>
            <Heading content="Home" icon="i-home"></Heading>
            <HomeContent>
                A home, or domicile, is a living space used as a permanent or
                semi-permanent residence for an individual, family, household or
                several families in a tribe. It is often a house, apartment, or
                other building, or alternatively a mobile home, houseboat, yurt
                or any other portable shelter. <hr />
                <a href="https://en.wikipedia.org/wiki/Home">
                    <i className="i-link"></i>Wikipedia
                </a>
            </HomeContent>
        </AbsoluteWrapper>
    );
};

export default Home;
