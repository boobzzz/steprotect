import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from './utils/ScrollToTop';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import BlogList from './components/Blog/List/BlogList';
import BlogDetails from './components/Blog/Details/BlogDetails';
import Footer from './components/Footer/Footer';
import ScrollUpBtn from './components/UI/ScrollUpBtn/ScrollUpBtn';

function App() {
    return (
        <Router>
            <>
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/blog">
                        <BlogList />
                    </Route>
                    <Route path="/blog/post/:id">
                        <BlogDetails />
                    </Route>
                </Switch>
                <Footer />
                <ScrollUpBtn />
            </>
        </Router>
    )
}

export default App;
