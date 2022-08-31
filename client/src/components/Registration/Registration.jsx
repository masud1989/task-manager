import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { RegistrationRequest } from '../../apiRequest/apiRequest';
import { ErrorToast, IsEmail, IsEmpty, IsMobile, SuccessToast } from '../../helper/FormHelper';


const Registration = () => {
    const navigate = useNavigate();
    let {emailRef, nameRef, addressRef, mobileRef, passwordRef} = useRef(); 

    const handleRegisterBtn = () => {
        let email = emailRef.value;
        let name = nameRef.value;
        let address = addressRef.value;
        let mobile = mobileRef.value;
        let password = passwordRef.value;
        // console.log(email +" " + name +" " + address +" " + mobile +" " + password);
       
        if(IsEmail(email)){
            ErrorToast("Valid Email is Required")
        }
        else if(IsEmpty(name)){
            ErrorToast(" Oops! User Name is Required ")
        }
        else if(IsEmpty(address)){
            ErrorToast("User Address is Required")
        }
        else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile No is Required")
        }
        else if(IsEmpty(password)){
            ErrorToast("User Password is Required")
        }
        else{
            RegistrationRequest(email, name, address, mobile, password, "").then((result)=>{
                if(result === true){
                    
                    navigate("/login")
                  
                }
            })
        }
    }  

    return (
        <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4 className="text-center ">REGISTER </h4>
                                <br />
                                <input
                                    ref = {(input) => emailRef=input}
                                    placeholder="User Email"
                                    className="form-control animated fadeInUp"
                                    type="email"
                                    required
                                />
                                <br />

                                <input
                                    ref = {(input) => nameRef=input}
                                    placeholder="User Full Name"
                                    className="form-control animated fadeInUp"
                                    type="text"
                                />
                                <br />

                                <input
                                    ref = {(input) => addressRef=input}
                                    placeholder="User Address"
                                    className="form-control animated fadeInUp"
                                    type="text"
                                />
                                <br />

                                <input
                                    ref = {(input) => mobileRef=input}
                                    placeholder="User Mobile"
                                    className="form-control animated fadeInUp"
                                    type="text"
                                />
                                <br />

                                <input
                                    ref = {(input) => passwordRef=input}
                                    placeholder="User Password"
                                    className="form-control animated fadeInUp"
                                    type="password"
                                />
                                <br />

                                <button
                                onClick={handleRegisterBtn}
                                className="btn w-100 animated fadeInUp float-end btn-primary"
                                >
                                Register
                                </button>
                                <hr />
                                <div className="float-end mt-3">
                                <span>
                                    <Link
                                    className="text-center ms-3 h6 animated fadeInUp"
                                    to="/login"
                                    >
                                Sign In{" "}
                                    </Link>
                                    <span className="ms-2">|</span>
                                    <Link
                                    className="text-center ms-3 h6 animated fadeInUp"
                                    to="/sendOTP"
                                    >
                                    Forget Password
                                    <ToastContainer />
                                    </Link>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Registration;