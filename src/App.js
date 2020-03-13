import React, { useContext } from "react";
import "./sass/style.scss";

import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Container from "react-bootstrap/Container";

import Navigation from "./components/layout/Navigation";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import News from "./components/news/News";

const App = () => {
    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: "translateY(20vh)" },
        enter: { opacity: 1, transform: "translateY(0vh)" },
        leave: { opacity: 0, transform: "translateY(20vh)" }
    });

    return (
        <>
            <Navigation />
            <Container className="container-content">
                {transitions.map(({ item, props, key }) => (
                    <animated.div key={key} style={props} className="animated">
                        <Switch location={item}>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/news" component={News} />
                        </Switch>
                    </animated.div>
                ))}
            </Container>
        </>
    );
};

export default App;
