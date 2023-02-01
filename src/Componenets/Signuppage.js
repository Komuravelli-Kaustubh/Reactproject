import React from 'react';
import Navbar from './Navbar';

const Signuppage = () => {
    
    const mystyle1 = {
        border: "1px solid",
        borderRadius: "11px",
        padding: "2%",
        margin: "2%",
        height: "540px",
        position: "relative"
    }

    const mystyle2 = {
        color: "grey",
        textAlign: "center"
    }

    const mystyle3 = {
        padding: "1%",
        textAlign: "center"
    }

    const mystyle4 = {
        top: "14%",
        bottom: "1%",
        position: "relative"
    }

    return (
        <div className="clearall">
            {/* <h1>Hi</h1> */}

            <Navbar />
            <div style={mystyle1}>

                <div>
                    <h3 style={mystyle2}>Sign up</h3>
                    <div style={mystyle3}><input type="text"
                        placeholder="First and last name" style={{ width: "65%" }} /></div>

                    <div style={mystyle3}><input type="text"
                        placeholder="Enter email " style={{ width: "65%" }} /></div>

                    <div style={mystyle3}><input type="password"
                        placeholder="Create password " style={{ width: "65%" }} /></div>

                    <div style={mystyle3}><input type="password"
                        placeholder="Confirm password " style={{ width: "65%" }} /></div>

                </div>

                <div className="text-center mt-4 mb-1" style={mystyle4}>
                    <a href="Dashboard" className="btn btn-primary " style={{ width: "17%" }}>
                        Next</a>
                </div>

            </div>
        </div>
    )
}


export default Signuppage;

