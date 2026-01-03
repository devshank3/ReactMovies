import React from "react";
import styles from './problem.module.css';

function Theproblem() {

    const subheader = "This is the problem page";

    const double = (value: number) => value * 2;

    const viteLogo = '/vite.svg';

    const redsquareStyle = {
            backgroundColor: 'red',
            width: '100px',
            height: '100px',
            marginLeft: '20px'
    }
    return (
            <React.Fragment>
                <h1>The problem page</h1>
                <h3 className="red">{subheader.toUpperCase()}</h3>
                <p className={styles.red}>Double of 4 is {double(4)}</p>
                <img src={viteLogo} className="logo" alt="Vite logo" />
                <div style={redsquareStyle}></div>

                <div style={{backgroundColor: 'blue', width: '100px', height: '100px', marginTop: '20px'}}></div>
            </React.Fragment>
    )
}

export default Theproblem;