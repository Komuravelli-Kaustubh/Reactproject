import React from "react";
import Newnavbar from "./Newnavbar";
const Profile = () => {
    return (
        <div>
            <Newnavbar/>
            <div className="container-fuid">
                <div className=" p-3">
                    <h3><u>View your Profile:</u></h3>
                </div>
                <br />
                <div className="forborder border border-dark mt-2 ms-3 me-3 p-4">
                    <div className="row">
                        <div className="col-md-5">
                            <br />
                            <b className="fs-5">Name:</b>
                            <div className="fs-5">Aman</div>

                            <br />

                            <b className="fs-5">Date Of Birth:</b>
                            <div className="fs-5">9th September 2001</div>
                            <br />

                            <b className="fs-5">Mobile/Telephone:</b>
                            <div className="fs-5">1234567890</div>
                            <br />

                            <b className="fs-5">Email Id:</b><br />
                            <a href="#">aman3k3@yahoo.com</a>
                            <br /><br />

                            <b className="fs-5">Gender:</b>
                            <div className="fs-5">Male<small>  (Looking Handsome...)</small></div>
                            <br />

                            <b className="fs-5">Educational Qualifications:</b>
                            <div className="fs-5">MBA (IIM Ahmedabad)</div>
                            <div className="fs-5">BTech Chemical Engineering (IIT Roorkee)</div>
                            <br />

                            <b className="fs-5">Past Experience:</b>
                            <div className="fs-5">Tata Steel</div>
                            <br />

                        </div>

                        <div className="col-md-5 offset-md-2">
                            <br />
                            <div className="row ">

                                <img src="https://i.pinimg.com/originals/b9/6d/76/b96d764d91fc70d9ee2643ae8bce1ffa.jpg"
                                    className=" rounded-circle" style={{ width: "40%", marginLeft: "auto" }} /><br />

                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="text-center"><h3>Hobbies:</h3></div>
                        <div className="col-md-5">
                            <ol>
                                <li><h4>Badminton</h4></li>
                                <li><h4>Playing video games</h4></li>
                                <li><h4>Content Creation</h4></li>
                                <li><h4>Reading Mystery Novels</h4></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;