if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import {MainSnack} from "./components/main_snack.jsx"

ReactDOM.render(
    <div className="container">
        <MainSnack/>  </div>,
    document.getElementById('root'));