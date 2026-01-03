import React from "react";

function Theproblem() {

    const subheader = "This is the problem page";
    return (
            <React.Fragment>
            <h1>The problem page</h1>
            <h3>{subheader.toUpperCase()}</h3>
            </React.Fragment>
    )
}

export default Theproblem;