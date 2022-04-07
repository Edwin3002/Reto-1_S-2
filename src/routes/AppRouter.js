import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home';

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
