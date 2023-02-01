import React from "react";

const Signinpage = () => {
    return (
        <div style={{backgroundColor:"whitesmoke"}}>
            {/* <div className="container-fluid" style={{background:"whitesmoke"}}>
                <div className="row mt-5 py-3">
                    <div className="col-md-3 ">
                        <img src="https://publictrainingcenters.com/img/login-img.png" alt="photograph" className="img-fluid"
                            style={{ height: "600px" }} />
                    </div>
                    <div className="col-md-3 my-5 mb-5">
                        <p>
                            <div classNameName="text-center">
                                <h3>Sign In:</h3><br /><br />
                            </div>
                            <b>Email*<br /></b>
                            <input classNameName="form-control" type="text" placeholder="rando@gmail.com" aria-label="default input example"
                                required/>
                                <br /><br />
                                <b>Password:*<br /></b>
                                <input classNameName="form-control" type="password" placeholder="******" aria-label="default input example"
                                    required/>
                                    <br /><br />
                                    <div classNameName="text-center">
                                        <a href="afterseekerloginpage.html" type="submit" name="submit" classNameName="btn btn-success ">Submit</a>
                                    </div>
                                </p>
                            </div>
                    </div>

                    <div classNameName="col-md-2">

                    </div>
                </div> */}

            <div className="container-fluid" >
                <div className="row mt-5 py-3">
                    <div className="col-md ">
                        <img src="https://publictrainingcenters.com/img/login-img.png" alt="photograph" className="img-fluid"
                            style={{height:"600px"}} />
                    </div>

                    <div className="col-md-3 my-5 mb-5  ">

                        <p>
                            <div className="text-center">
                                <h3>Sign In:</h3><br /><br />
                            </div>
                            <b>Email*<br /></b>
                            <input className="form-control" type="text" placeholder="rando@gmail.com" aria-label="default input example"
                                required />
                            <br /><br />
                            <b>Password:*<br /></b>
                            <input className="form-control" type="password" placeholder="******" aria-label="default input example"
                                required />
                            <br /><br />
                            <div className="text-center">
                                <a href="/Dashboard" type="submit" name="submit" className="btn btn-success ">Submit</a>

                            </div>
                        </p>

                    </div>

                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Signinpage;