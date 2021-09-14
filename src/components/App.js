import React from 'react';
import { BrowserRouter, Router, Route, Link, HashRouter, MemoryRouter } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import StreamDelete from './streams/StreamDelete'
import Header from './Header';
import history from '../history';

const KEY = "360100302157-v7gtn76rs91ahu9u1mrclpsi9c2bvb3e.apps.googleusercontent.com"

const App = () => {
    return (
        <div className="ui container">
            <Router history={ history }>
                <div>
                    <Header/>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit/:id' exact component={StreamEdit} />
                    <Route path='/streams/delete' exact component={StreamDelete} />
                    <Route path='/streams/show' exact component={StreamShow} />
                </div>
            </Router>
        </div>
    );
};

export default App;