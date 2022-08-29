import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90  p-4">
                        <div className="card-body">
                            <h4 className="text-center ">SIGN IN</h4>
                            <br />
                            <input
                            //   ref={(input) => (emailRef = input)}
                            placeholder="User Email"
                            className="form-control animated fadeInUp"
                            type="email"
                            />
                            <br />
                            <input
                            //   ref={(input) => (passwordRef = input)}
                            placeholder="User Password"
                            className="form-control animated fadeInUp"
                            type="password"
                            />
                            <br />
                            <button
                            //   onClick={SubmitLogin}
                            className="btn w-100 animated fadeInUp float-end btn-primary"
                            >
                            Sign In
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
        </Fragment>
    );
};

export default Login;