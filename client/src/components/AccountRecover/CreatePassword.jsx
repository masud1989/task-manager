import React, { Fragment } from 'react';
import { useRef } from 'react';
import { getEmail } from '../../helper/SessionHelper';
import { ErrorToast, IsEmpty } from '../../helper/FormHelper';
import { RecoverResetPasswordRequest } from '../../apiRequest/apiRequest';

const CreatePassword = () => {
        let passwordRef, confirmPasswordRef = useRef();

        const ResetPass = () => {
            let password = passwordRef.value;
            let confirmPassword = confirmPasswordRef.value;

            if(IsEmpty(password)){
                ErrorToast('Password Field is Required')
            }
            else if(IsEmpty(confirmPassword)){
                ErrorToast('Confirm Password Field is Required')
            }
            else if(password !== confirmPassword){
                ErrorToast('Password & Confirm Password Field is not Matched')
            }
            else{
                RecoverResetPasswordRequest().then((res)=>{

                })
            }
            
        }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90 p-4">
                            <div className="card-body">
                                <h4>SET NEW PASSWORD</h4>
                                <br/>
                                <label>Your email address</label>
                                <input value={getEmail()} readOnly={true}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <label>New Password</label>
                                <input ref={(input)=>passwordRef=input}  placeholder="New Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <label>Confirm Password</label>
                                <input ref={(input)=>confirmPasswordRef=input} placeholder="Confirm Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={ResetPass} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CreatePassword;