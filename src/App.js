import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from './utils/ScrollToTop';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import BlogList from './components/Blog/List/BlogList';
import BlogDetails from './components/Blog/Details/BlogDetails';
import AdminList from './components/Blog/Admin/List/AdminList';
import AdminForm from './components/Blog/Admin/Form/AdminForm';
import Footer from './components/Footer/Footer';
import ScrollUpBtn from './components/UI/ScrollUpBtn/ScrollUpBtn';

function App() {
    return (
        <Router
            // basename="/steprotect"
            >
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
                    <Route exact path="/administration">
                        <AdminList />
                    </Route>
                    <Route path="/administration/post/create">
                        <AdminForm />
                    </Route>
                    <Route path="/administration/post/:id/edit">
                        <AdminForm />
                    </Route>
                </Switch>
                <Footer />
                <ScrollUpBtn />
            </>
        </Router>
    )
}

export default App;
