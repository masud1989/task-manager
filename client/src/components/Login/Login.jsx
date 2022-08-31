import React, { Fragment, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
import { LoginRequest } from '../../apiRequest/apiRequest';
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '../../helper/FormHelper';

const Login = () => {
    let emailRef, passwordRef = useRef();

    const handleLoginBtn = () => {
        let email = emailRef.value;
        let password = passwordRef.value;
        console.log(email + " " + password);
        if(IsEmail(email)){
            ErrorToast('Invalid Email Address')
        }
        else if(IsEmpty(password)){
            ErrorToast('Password is Required')
        }
        else{
            LoginRequest(email,password).then((result)=>{
                if(result === true){
                    SuccessToast('Login Success')
                    window.location.href='/' 
                }
            })
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90  p-4">
                        <div className="card-body">
                            <h4 className="text-center ">LOGIN HERE</h4>
                            <br />
                            <input
                            ref={(input)=>(emailRef=input)}
                            placeholder="User Email"
                            className="form-control animated fadeInUp"
                            type="email"
                            />
                            <br />
                            <input
                            ref={(input) => (passwordRef = input)}
                            placeholder="User Password"
                            className="form-control animated fadeInUp"
                            type="password"
                            />
                            <br />
                           
                            <button
                            onClick={handleLoginBtn}
                            className="btn w-100 animated fadeInUp float-end btn-primary"
                            >
                            Login
                            </button>
                            <hr />
                            <div className="float-end mt-3">
                            <span>
                                <Link
                                className="text-center ms-3 h6 animated fadeInUp"
                                to="/registration"
                                >
                                Sign Up{" "}
                                </Link>
                                <span className="ms-2">|</span>
                                <Link
                                className="text-center ms-3 h6 animated fadeInUp"
                                to="/sendOTP"
                                >
                                Forget Password
                                </Link>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <ToastContainer/>
        </Fragment>
    );
};

export default Login;