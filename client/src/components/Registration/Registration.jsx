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
        let photo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAbFBMVEX///8AAADV1dX7+/v19fX4+PhsbGza2trv7+/r6+vf39/o6OhlZWVvb2/l5eXS0tLExMSMjIxfX182NjaGhoYvLy9DQ0Obm5tUVFR/f3+ysrLMzMwjIyO5ubmqqqqioqIcHBxKSkoPDw93d3cskz1MAAAENElEQVR4nO1a2cKyOgwUAVlkEZFFEUV9/3f89WjSgiKhi9+56NxSyrTNMklZLAwMDAwMDAwMDAz+93CD0PO8cO3+HYNlFtV5Z1lWl9dR1vwFkza2hli19k8pJNUbhSeq5Gcc3Ow4QsKyjrsfHcwmH+XwQLH5AQf73R6GiLVvx/oyScKySs3WkRQEEnfr8HSS8AZfW1VtmqyTtK3ia/9Jqo/EuvehaONwz5xm1Xuq7VD8kt+G5dvzJW+4pa+JBbfYovk4IuXMJtJD4sy+cHNGxjg3NqjSQSJg82dfhnGxfa2BxY1EYrHImOmoJ5Hi5LuJkYzGZ+ORwRamrsdsAmCzoapJsK2YDgQsrKiOXfs5lo/eFCtmAfMep87jARfDhloSm3lBADejVcpi95r1SksPSUf0p1lAs6eGAMgoF5WCx4cdPhNfOMELKnNaSHfTJ9BZVcodNE6KhzzgguhRaZ5g8zm17LFBiqhMrJAo6SEZzPl75psHSFD0LHnTyIKun3Sy+NsTAfcvyNYJVaRK60RPpQYhR0ciwWqIGoQwzL3XC+LwrzM3+Dx38yiwo9ekW+ILML5WWr6joqUdCR6IShfhZCdNMCBpxSocpr1SSh0fRI5ixcdWtycM3s3bOTo87E9M+x7rcqj00/+ABXsRTIz0sfumvmxnC5zy1kjfVnCHPbFE1kqhmNBssM7VdjwWuWwnLC396JbNX48Fr7Bmgw46SHC16h2njyMOXKfvpocE1z24I39fasu3prfa7gecXs81rzyWMZ2w4juAtKpaEP6g9VvG2WnTbE5ZfOk/mAwqUnBKi4JcV7PzBfc2zcGKNR7HC+dJEtSSWgJONX5R9ESXaT6PxXo3QeGJvc4LEvtMux65O2ql7b7Iq6c/jyg13ZBknz/XHbvPD1QLrQeC1fAreb07eEkSBEGSeIesfrta3Cq3jnDwjWvVDD3Bb6rBtVWhWOak/en3Ywo/HfiQ0kqg5Wfu9t+SRLDrxROFImPDzxuFE6OT3r2vsqKdJ5FT7q8b3ogUXXiH3JQ3WnB2eFmmxEQDbmH0PHViLxUq7s84mTfH1HitLE+C3Qle57ndkoVU6f5BIm5mDXtVthvOzuOz9v+GAzsTOUHOJhJpGTJZJiW/mPSPhFaDGfAoI7/YYsT0LLY9ZbqvNk4iGoeZv4prLww94h6P1i1sGe4FphBXb0uYohStUVBUyHSGsIoSzWpo4TL5KJRcCpbGFwkSiwUId8ECGmXF/KjJAwOfmJ+B8u/kugAOZDWxZhvoR9nEjM4q8jKGLLkD4SKXiK9iYpZNy9ivFfFVkDfSP6E5EPxEcgnUN/LNbGjEiphnLPFuHyDIBf7fcmuJfewDkqJAKkGBI1/jgZMISB28dZIv8SAIXwVYgH/Jl92Y3eezsJdPpPK9Szd9zfXbX+cNDAwMDAwMDAwMBvgHVecqO6K/KbgAAAAASUVORK5CYII=";
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
            RegistrationRequest(email, name, address, mobile, password, photo).then((result)=>{
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