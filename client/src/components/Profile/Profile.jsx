import React, { useRef } from 'react';
import { useEffect } from 'react';
import { ProfileDetailsRequest, ProfileUpdateRequest } from '../../apiRequest/apiRequest';
import { useSelector } from "react-redux";
import { ErrorToast, getBase64, IsEmail, IsEmpty, IsMobile } from '../../helper/FormHelper';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Profile = () => {

    let emailRef,nameRef,addressRef,mobileRef,passwordRef,userImgRef,userImgView=useRef();
    const navigate = useNavigate()
    useEffect( () =>{
        ProfileDetailsRequest()
    }, [])

    const ProfileData = useSelector( (state) => state.profile.value)
    // console.log(ProfileData);

    const PreviewImage =() => {
        let ImgFile = userImgRef.files[0];
        getBase64(ImgFile).then((base64)=>{
            userImgView.src=base64
        })
    }

    const UpdateProfile = () => {
        let email = emailRef.value;
        let name = nameRef.value;
        let address = addressRef.value;
        let mobile = mobileRef.value;
        let password = passwordRef.value;
        let photo =  userImgView.src;

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
            ProfileUpdateRequest(email, name, address, mobile, password, photo).then((result)=>{
                if(result === true){
                    
                    navigate("/login")
                  
                }
            })
        }
    
    }

    return (
        <div className="container">
            <h4 className='ms-5 mb-5 text-primary'>Profile Details</h4>
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <label className='me-5'>Old Profile Picture</label>
                                <img  ref={(input)=>userImgView=input} className="icon-nav-img-lg" src={ProfileData['photo']} alt=""/>
                                <hr/>
                                <div className="row">
                                    <div className="col-6 p-2">
                                        <label>Profile Picture</label>
                                        <input  onChange={PreviewImage}  ref={(input)=>userImgRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="file"/>
                                    </div>
                                    <div className="col-6 p-2">
                                        <label>Email Address</label>
                                        <input key={Date.now()} defaultValue={ProfileData['email']}  readOnly={true}  ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-6 p-2">
                                        <label>Name</label>
                                        <input  key={Date.now()} defaultValue={ProfileData['name']} ref={(input)=>nameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-6 p-2">
                                        <label>Address </label>
                                        <input key={Date.now()} defaultValue={ProfileData['address']}  ref={(input)=>addressRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-6 p-2">
                                        <label>Mobile</label>
                                        <input key={Date.now()} defaultValue={ProfileData['mobile']} ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-6 p-2">
                                        <label>Password</label>
                                        <input key={Date.now()} defaultValue={ProfileData['password']}  ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                    <div className="col-4 p-2 mt-5">
                                    {/* onClick={UpdateMyProfile} */}
                                        <button onClick={UpdateProfile}  className="btn w-50 float-start btn-primary animated fadeInUp">Update</button>
                                    </div>
                                    <ToastContainer/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;