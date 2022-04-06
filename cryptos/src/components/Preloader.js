import React from 'react';
import preloader from "../gif/spinner.gif"

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="preloader"/>
        </div>
    );
};

export default Preloader;