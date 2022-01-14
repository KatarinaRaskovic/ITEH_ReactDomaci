import React from 'react';
import FormHome from './FormHome';
import FormCart from './FormCart';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Form.css';

const Form = () => {

    return (
        <Router>
            <div className="gradient">
                <div className="header-flex-container bg-dark">                  
                        <nav className="navbar navbar-expand-lg navbar-light ">                           
                                <ul className="navbar-nav mr-auto">
                                    <li >
                                        <Link className="nav-link text-white" to="/">Home</Link>
                                    </li>
                                    <li >
                                        <Link className="nav-link text-white" to="/cart">Cart</Link>
                                    </li>
                                </ul>                           
                        </nav>
                </div>
            <Route exact path="/" component={FormHome }/>
            <Route exact path="/cart" component={FormCart  }/>
        </div>
        </Router>
    )
}

export default Form