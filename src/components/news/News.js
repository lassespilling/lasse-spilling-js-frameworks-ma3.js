import React from "react";
import Heading from "../layout/Heading";
import NewsList from "../layout/NewsList";
import AbsoluteWrapper from "../layout/AbsoluteWrapper";

function News() {
    return (
        <AbsoluteWrapper>
            <Heading content="Breaking News" icon="i-news"></Heading>
            <NewsList></NewsList>
        </AbsoluteWrapper>
    );
}

export default News;
