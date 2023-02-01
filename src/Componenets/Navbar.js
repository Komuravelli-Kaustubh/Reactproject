import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div class="container-fluid">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <svg class="bi me-2" width="40" height="32">
                            {/* <use xlink:href="#bootstrap" /> */}
                        </svg>
                        <span class="fs-4 text-primary">
                            {/* <!-- <div style="font-size:65px;">Career Guru</div> --> */}
                            <h1>Career Guru</h1>
                        </span>
                    </a>

                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="#" class="nav-link ">Home</a></li>
                        <li class="nav-item"><a href="#features" class="nav-link">Features</a></li>
                        <div class="btn btn-warning">
                            <li class="nav-item"><a href="/Signinpage" class="nav-link ">Log In</a></li>
                        </div>
                        {/* <!-- <button class="btn btn-md btn-warning pb-1 pt-1" href="career Guru log in page.html">Login</button> --> */}
                        {/* <!-- <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li> --> */}
                        <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                    </ul>
                </header>
            </div>
        </div>

            
        

    )
}

export default Navbar;