import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "../components/Header"
import Home from "../components/home"

const App = () => {
    return (
        <Suspense fallback={null}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Router>
        </Suspense>
    );
}