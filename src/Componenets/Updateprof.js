import React from "react";
import Newnavbar from "./Newnavbar";

const Updateprof = () => {
    return (
        <div>
            <Newnavbar />
            <div className="container-fluid ">
                <div id="main" className="mx-4 mt-5 border border-dark">
                    <form action="">
                        <fieldset>
                            <legend><u>Profile</u></legend>
                        </fieldset>
                        <p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-5 ">
                                        <b>Name: * </b>
                                        <input className="form-control" type="text" placeholder="Default name" aria-label="default input example" />
                                        <br />
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label"><b>Email address</b></label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <br /><br />
                                        <b>Date Of Birth:</b>
                                        <input type="date" className="form-control" name="dob" id="date_time" />
                                        <br /><br />
                                        <b>Phone no:</b>
                                        <input className="form-control" type="text" placeholder="+91" aria-label="default input example" />
                                        <br /><br />
                                        <b>Educational Qualifications:</b><br />
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Choose Your City
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">10th pass</a></li>
                                                <li><a className="dropdown-item" href="#">12th Pass</a></li>
                                                <li><a className="dropdown-item">Btech in CSE</a></li>
                                                <li><a className="dropdown-item">Btech in ECE</a></li>
                                                <li><a className="dropdown-item">Btech in Chemical Engineering</a></li>
                                                <li><a className="dropdown-item">Btech in Civil Engineerong</a></li>
                                                <li><a className="dropdown-item">Btech in <b>Mechanical Engineering</b></a></li>
                                                <li><a className="dropdown-item">Mtech in CSE</a></li>
                                                <li><a className="dropdown-item">Mtech in ECE</a></li>
                                                <li><a className="dropdown-item">Mtech in Chemical Engineering</a></li>
                                                <li><a className="dropdown-item">Mtech in Civil Engineering</a></li>
                                                <li><a className="dropdown-item">Mtech in <b>Mechanical Engineering</b></a></li>
                                                <li><a className="dropdown-item">MBA Graduate</a></li>
                                                <li><a className="dropdown-item">Bcom Graduate</a></li>
                                                <li><a className="dropdown-item">Mcom graduate</a></li>
                                                <li><a className="dropdown-item">Hospitality graduate</a></li>

                                            </ul>
                                        </div>



                                        <br /><br />
                                        <b>Gender:</b>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Female
                                            </label>
                                        </div>
                                        <br /><br />
                                        <b>Hobbies:</b>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbix" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Swimming
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Dancing
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Sports
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Watching Films/Reading Books
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Content creation/Editing
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Playing Video Games
                                            </label>
                                        </div>

                                        {/* <input className="form-control" type="text" placeholder="Any other hobby" /> */}
                                        <input className="form-control" type="text" placeholder="Any other hobby" aria-label="default input example" />
                                    </div>

                                    <div className="col-md-5 offset-md-2">
                                        <div className="text-center">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVE-LeGQfTup5pNp7IbUE8uvNJUtem355uUUG0j_1D5unRQs1iK8_RHsAS1SwZRqlwK8&usqp=CAU"
                                                alt="gandmara" /><br />
                                            <label>Upload Profile Picture</label><br />
                                            <input type="file" className="form-control-file" />
                                        </div>
                                        <br /><br />
                                        <b>Your City:</b><br />

                                        <div className="btn-group">
                                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Choose Your City
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Mumbai</a></li>
                                                <li><a className="dropdown-item" href="#">New Delhi</a></li>
                                                <li><a className="dropdown-item" href="#">Madras</a></li>
                                                <li><a className="dropdown-item" href="#">Jaipur</a></li>
                                                <li><a className="dropdown-item" href="#">chandigarh</a></li>
                                                <li><a className="dropdown-item" href="#">dehradun</a></li>
                                                <li><a className="dropdown-item" href="#">Shimla</a></li>
                                                <li><a className="dropdown-item" href="#">bhubaneshwar</a></li>
                                                <li><a className="dropdown-item" href="#">Roorkee</a></li>
                                                <li><a className="dropdown-item" href="#">Bhopal</a></li>
                                                <li><a className="dropdown-item" href="#">Indore</a></li>
                                            </ul>
                                        </div>
                                        <br /><br /><br />

                                        <b>Choose your city of job prefference:</b><br />
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Choose Your city of prefferable<br /> job posting
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Mumbai</a></li>
                                                <li><a className="dropdown-item" href="#">New Delhi</a></li>
                                                <li><a className="dropdown-item" href="#">Madras</a></li>
                                                <li><a className="dropdown-item" href="#">Jaipur</a></li>
                                                <li><a className="dropdown-item" href="#">chandigarh</a></li>
                                                <li><a className="dropdown-item" href="#">dehradun</a></li>
                                                <li><a className="dropdown-item" href="#">Shimla</a></li>
                                                <li><a className="dropdown-item" href="#">bhubaneshwar</a></li>
                                                <li><a className="dropdown-item" href="#">Roorkee</a></li>
                                                <li><a className="dropdown-item" href="#">Bhopal</a></li>
                                                <li><a className="dropdown-item" href="#">Indore</a></li>
                                            </ul>
                                        </div><br /><br /><br />
                                        <b>Alumini Details</b><br />
                                        <input className="form-control" type="text" placeholder="Enter your Alumini Details" /><br /><br />
                                        <b>Previous Experiences:</b><br />
                                        <input className="form-control" type="text" placeholder="Previous Job/Internship" />

                                    </div>
                                </div>
                            </div>

                            <div className="row form-check">
                                <div className="text-center">
                                    <div className="form-group mx-auto" style={{ width: "100%" }}>
                                        <label>Upload CV</label><br />
                                        <input type="file" className="form-control-file" />
                                    </div>
                                </div>
                            </div>
                        </p>

                        <button type="button" className="btn btn-success " style={{ width: "100%" }}>Submit</button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Updateprof;