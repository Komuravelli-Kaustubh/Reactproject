import React from 'react';

const Footer=()=>{

    let footerstyle={

        position:"absolute",
        top:"auto",
        width:"100%",

    }
    return(
    <footer className="bg-dark text-white py-3" style={footerstyle}>
        <p className='text-center'>
            Copyright &copy; CareerGuru
        </p>
    </footer>
    )
}

export default Footer

