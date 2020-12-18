import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { NoMatch } from './components/UI/NoMatch/NoMatch';
import { ScrollToTop } from './components/UI/ScrollToTop/ScrollToTop';
import { ScrollUpBtn } from './components/UI/ScrollUpBtn/ScrollUpBtn';
import BlogList from './components/Blog/List/BlogList';
import BlogDetails from './components/Blog/Details/BlogDetails';
import AdminAuth from './components/Blog/Admin/Auth/AdminAuth';
import AdminList from './components/Blog/Admin/List/AdminList';
import AdminForm from './components/Blog/Admin/Form/AdminForm';

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
                    <Route exact path="/administration">
                        <AdminAuth />
                    </Route>
                    <Route path="/administration/list">
                        <AdminList />
                    </Route>
                    <Route path="/administration/post/create">
                        <AdminForm />
                    </Route>
                    <Route path="/administration/post/:id/edit">
                        <AdminForm />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
                <Footer />
                <ScrollUpBtn />
            </>
        </Router>
    )
}

export default App;