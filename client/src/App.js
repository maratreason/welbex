import React from "react";
import classes from "./App.module.css";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className={classes.App}>
            <div className="container">
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
